"use client";

import { Post } from "@/typings/typings";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PortableText from "react-portable-text";
import { urlForImage } from "@/sanity/lib/image";
import {
  convertDateFormat,
  formatDate,
  formatDateToHumanReadable,
} from "@/utils/helpers";
import { HeartIcon } from "lucide-react";
import CommentForm from "@/components/ui/CommentSection";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/customButton";
import { useGetUserCurrentSubscription } from "@/hooks/transactions";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@supabase/auth-helpers-react";

interface Props {
  post: Post;
  comments: IComments[];
}
interface CommentI {
  comments: "";
}

type IComments = {
  _id: string;
  name: string;
  email: string;
  comment: CommentI;
};

const SinglePostDetail = ({ post, comments }: Props) => {
  console.log(comments);
  const user = useUser();
  const authmodal = useAuthModal();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComments>();
  const router = useRouter();

  const { subscription, fetchingSubscription, fetchingSubscriptionError } =
    useGetUserCurrentSubscription();

  // console.log(subscription);

  const expirydate = new Date(subscription?.expire_at || null).getTime();
  const now = new Date().getTime();

  const subscription_valid = expirydate > 0 && expirydate > now;

  console.log(subscription_valid, expirydate, now);

  const [views, setViews] = useState(post.views || 0);

  useEffect(() => {
    // Increment the views count when the component mounts
    fetch(`/api/comments/increment-views?postId=${post._id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the local state with the new views count
        setViews(data.views);
      })
      .catch((error) => {
        console.error('Error incrementing views:', error);
      });
  }, []);




  return (
    <Loading loading={fetchingSubscription}>
      <article className="border-[1px] md:mx-10 my-10 py-10 px-5 space-y-6">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="rounded-full h-8 w-8 relative border-2 border-limeGreen">
              <Image
                src={urlForImage(post?.author?.image?.asset?._ref).url()}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(200, 200)
                )}`}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <span className="uppercase">{post.author.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm text-slate-700">
              {convertDateFormat(post.publishedAt)}
            </span>
          </div>
        </div>
        <h1 className="text-center uppercase text-3xl font-semibold text-slate-900">
          {post.title}
        </h1>
        <div>
          <Image
            alt="post image"
            width="1000"
            height="1000"
            className="w-full h-72 object-cover"
            src={urlForImage(post?.mainImage?.asset?._ref).url()}
          />
        </div>
        <p className="text-center text-slate-600">{post.description}...</p>

        {subscription_valid ? (
          <>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
              projectId={
                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cze1d23v"
              }
              content={post.body}
              serializers={{
                h1: (props: any) => {
                  <h1
                    className="text-3xl font-semibold py-5 text-slate-700"
                    {...props}
                  />;
                },
                h2: (props: any) => {
                  <h2 className="text-2xl font-semibold py-5 " {...props} />;
                },
                h3: (props: any) => {
                  <h3
                    className="text-2xl font-semibold my-5 text-slate-800"
                    {...props}
                  />;
                },
                p: (props: any) => {
                  <p
                    className="text-base leading-8 my-5 text-slate-700"
                    {...props}
                  />;
                },
                link: ({ href, children }: any) => {
                  <a
                    href={href}
                    className="text-limeGreen hover:underline"
                  ></a>;
                },
              }}
            />
            {post.categories && (
              <div className="flex gap-2 flex-wrap">
                {post.categories.map((category) => (
                  <div
                    className="border-[1px] px-3 py-0.5 text-slate-700 capitalize"
                    key={category.title}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            )}
            <div className="border-t-[1px] flex justify-between pt-2 text-slate-600 text-sm">
              <div className="flex gap-4">
                <span>{post.commentNumber} comments</span>
                <span>{views} views</span>
              </div>
              <div className="flex gap-2">
                <HeartIcon />
                <span>{post.likes}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="p-12 flex flex-col items-center gap-8">
            <b>Want to read more?</b>
            <p>Subscribe to our blog to keep reading this exclusive post.</p>
            {user ? (
              <Button
                onClick={() => router.push("../subscribe")}
                label="Subscribe"
                intent="primary"
              />
            ) : (
              <Button
                onClick={authmodal.onOpen}
                label="Subscribe"
                intent="primary"
              />
            )}
          </div>
        )}
      </article>
      <div className="flex flex-col-reverse gap-y-20 w-full gap-x-20 md:px-10">
        <div className="w-full order-2 md:order-1">
          <h1 className="capitalize text-sm text-slate-700">comment section</h1>
          <p>leave a comment below and join the discussion</p>
          <CommentForm _id={post._id} />
        </div>
        <div className="w-full order-1 md:order-2 space-y-2">
          <h2 className="capitalize text-sm text-slate-700">
            all comments on this post
          </h2>

          <div className="border my-5 py-5 h-max">
            {comments?.map((comment) =>
              comment.post && comment.post._ref === post._id ? (
                <div className="flex flex-col gap-y-4 p-4" key={comment._id}>
                  <span className=" flex flex-col md:flex-row items-start md:items-center gap-x-10 gap-y-5 justify-between py-5 border-b">
                    <p className=" capitalize font-semibold text-lg ">{comment.name}</p>
                  
                    <p className=" italic text-sm text-neutral-600 max-w-3xl">{comment.comment}</p>
                  </span>
                </div>
              ) : (
                null
              )
            )}
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default SinglePostDetail;
