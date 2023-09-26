"use client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import { HeartIcon, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { UseAddViews, useGetPostLike, useGetPostViews } from "@/hooks/posts";
import { useUser } from "@supabase/auth-helpers-react";
import { IoHeart } from "react-icons/io5";

const BlogCard = ({ post, slug }) => {
  const { postLike, fetchingPostLike, fetchingPostLikeError, refetchPostLike } =
    useGetPostLike({
      slug: post.slug.current,
    });

  const {
    postViews,
    fetchingPostViews,
    fetchingPostViewsError,
    refetchPostViews,
  } = useGetPostViews({ slug });
  const { addViews, performingAddViews, addViewsError } = UseAddViews({
    slug,
    refetchPostViews,
  });

  useEffect(() => {
    if (
      !!postViews?.data?.find((like) => like.user_id === user?.id) ||
      fetchingPostViews
    )
      return;
    addViews();
  }, [postViews]);

  // console.log(post.slug.current, postLike);

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
              <div className="flex items-center gap-x-2 md:gapx-x-4">
                <span className=" text-xs md:text-sm">
                  {post.comments} comments
                </span>
                <span className=" text-xs md:text-sm">{postViews.count} views</span>
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
                          ? "text-pink-700  flex items-center gap-x-2"
                          : ""
                      }
                    >
                      <span className=" text-2xl">
                        <IoHeart />
                      </span>
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
