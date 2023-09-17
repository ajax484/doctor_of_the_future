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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BookingProps } from "@/types/products";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useBookingContext } from "../../../layout";
import { UseInitializeTransaction } from "@/hooks/transactions";
import { generateReferenceNumber } from "@/utils/helpers";
import Link from "next/link";

const phone_numberRegex = /^\+?[1-9]\d{1,14}$/; // Example regex for phone numbers
const bookingFormSchema = z.object({
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
  phone_number: z.string().refine((value) => phone_numberRegex.test(value), {
    message:
      "Invalid phone number format. Please use numbers and optional '+' sign.",
  }),
  message: z.string().optional(),
  payment_method: z.string(),
  payment_type: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export default function BookingForm({
  booking,
  initializeTransaction,
}: {
  booking: BookingProps;
  initializeTransaction: ({ payload }) => void;
}) {
  const { session } = useSessionContext();
  const { changeMethod, changeFormValues } = useBookingContext();
  const email = session?.user.email;
  // This can come from your database or API.
  const defaultValues: Partial<BookingFormValues> = {
    email,
    payment_method: "plan",
    payment_type: "online",
  };
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { watch } = form;
  const payment_method = watch("payment_method");

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name !== "payment_method") return;
      if (value.payment_method) {
        changeMethod(value.payment_method);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  function onSubmit(data: BookingFormValues) {
    console.log(data, "here");
    changeFormValues(data);
    const { email } = data;
    const amount = booking.price;
    const reference = generateReferenceNumber("BKN");

    const payload = {
      email,
      amount,
      reference,
      metadata: { user_id: session?.user?.id, ...data, booking_id: booking.id },
    };

    initializeTransaction({ payload });
  }

  return (
    <Form {...form}>
      <form
        id="booking-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="enter name" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription> */}
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
          name="phone_number"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Leave a message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="payment_method"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Choose how you want to pay</FormLabel>
              {/* <FormDescription>
                Select the theme for the dashboard.
              </FormDescription> */}
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid md:grid-cols-2 gap-4 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4">
                    <div className="flex items-center gap-4">
                      <FormControl>
                        <RadioGroupItem value="plan" />
                      </FormControl>
                      <Link href={`/plans`}>
                        <span>Buy a Plan</span>
                      </Link>
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4">
                    <div className="flex items-center gap-4">
                      <FormControl>
                        <RadioGroupItem value="session" />
                      </FormControl>
                      <span>Pay For This Session</span>
                    </div>
                    <span>{formatPriceToNaira(booking.price)}</span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
        {payment_method === "session" && (
          <FormField
            control={form.control}
            name="payment_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>When do you want to pay?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="online">Pay Now</SelectItem>
                  </SelectContent>
                </Select>
                {/* <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
}
