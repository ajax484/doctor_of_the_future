"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSessionContext } from "@supabase/auth-helpers-react";
import Button from "../customButton";
import { useState } from "react";
import { toast } from "../use-toast";
import { useRouter } from "next/navigation";

interface FormData {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const CommentFormSchema = z.object({
  _id: z.string(),
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  comment: z.string().optional(),
});

type CommentFormValues = z.infer<typeof CommentFormSchema>;

export default function CommentForm({ _id }: { _id: string }) {
  const router = useRouter();
  const { session } = useSessionContext();
  const email = session?.user.email;
  const [submitted, setSubmitted] = useState(false);

  // This can come from your database or API.
  const defaultValues: Partial<CommentFormValues> = {
    _id,
    email,
  };
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: CommentFormValues) {
    // console.log(data);
    // console.log(data);
    const commentData = {
      ...data,
      postId: _id, // Automatically associate the comment with the post
    };

    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(commentData),
    })
      .then(() => {
        setSubmitted(true);
        router.refresh();
        toast({
          title: "Comment Submitted",
          description: "your comment will appear after approval by the team",
        });
      })
      .catch((err) => {
        toast({
          description: "Sorry, couldnt post comment, try again",
        });
        setSubmitted(false);
      });
  }

  return (
    <Form {...form}>
      <form
        id="comment-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row my-5 gap-4">
          <FormField
            control={form.control}
            name="_id"
            render={({ field }) => (
              <FormItem className="flex-1 hidden">
                <FormLabel>ID (hidden)</FormLabel>
                <FormControl>
                  <Input placeholder="enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="enter email" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a comment"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" intent="primary" label="Submit Comment" />
      </form>
    </Form>
  );
}
