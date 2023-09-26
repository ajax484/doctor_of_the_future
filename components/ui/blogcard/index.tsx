"use client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import { HeartIcon, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGetPostLike } from "@/hooks/posts";
import { useUser } from "@supabase/auth-helpers-react";

const BlogCard = ({ post }) => {
  const { postLike, fetchingPostLike, fetchingPostLikeError, refetchPostLike } =
    useGetPostLike({
      slug: post.slug.current,
    });

  console.log(post.slug.current, postLike);

  const user = useUser();

  return (
    <div key={post.id} className="mb-14 border">
      <Link href={`/blog/post/${post.slug.current}`}>
        <div className="flex h-96 bg-white border-1 shadow-md">
          <div className="w-1/2 relative bg-black">
            <Image
              src={urlForImage(post.mainImage).url() || ""}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="w-1/2 px-4 md:px-8 p-2 flex flex-col justify-between">
            <div>
              <h1 className="uppercase text-base md:text-2xl lg:text-3xl font-semibold">
                {post.title}
              </h1>
              <p>{post.description}</p>
            </div>
            <div className="border-t-1 flex flex-col md:flex-row gap-y-4 justify-between pt-2">
              <div className="flex gap-x-2 md:gapx-x-4">
                <span className=" text-xs md:text-sm">
                  {post.comments} comments
                </span>
                {/* <span className=" text-xs md:text-sm">{viewCount} views</span> */}
              </div>
              <div className="flex gap-2">
                {fetchingPostLike ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <>
                    <span
                      className={
                        postLike?.data?.find(
                          (like) => like.user_id === user?.id
                        )
                          ? "text-pink-700"
                          : ""
                      }
                    >
                      <HeartIcon />
                    </span>

                    <span>{postLike.count || 0}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
