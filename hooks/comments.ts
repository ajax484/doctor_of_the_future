"use client"
import { toast } from "@/components/ui/use-toast";
import { client } from "@/sanity/lib/client";
import groq from "groq";
import { useMutation, useQuery } from "react-query";

// Create a custom hook that uses useQuery
export const useGetComments = ({ slug }: { slug: string }) => {
    const {
      data: comments,
      isFetching: commentsIsFetching,
      error: commentsError,
    } = useQuery({
      queryKey: "comments",
      queryFn: async () => {
        const querycomments = groq`*[_type == "comment" && slug.current == '${slug}']`;
  
        const comments = await client.fetch(querycomments);
        console.log(comments);
        return comments;
      },
    });
  
    return { comments, commentsIsFetching, commentsError };
  };
  
  export const usePostComment = () => {
    const {
      mutate: postComment,
      isLoading: postCommentIsLoading,
      error: postCommentError,
    } = useMutation({
      mutationFn: async (data) => {
        try {
          const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify(data),
          });
  
          if (response.ok) {
            toast({
              title: "Comment Submitted",
              description: "Your comment will appear after approval by the team",
            });
          } else {
            throw new Error("Could not post comment");
          }
        } catch (error) {
          toast({
            description: "Sorry, couldn't post comment, please try again",
          });
        }
      },
    });
  
    return { postComment, postCommentIsLoading, postCommentError };
  };
  