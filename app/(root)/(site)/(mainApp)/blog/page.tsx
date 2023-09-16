import { siteConfig } from "@/app/(root)/siteConfig/page";
import { getPosts } from "@/hooks/posts";
import { urlForImage } from "@/sanity/lib/image";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import { HeartIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// do not add use client to this

export const metadata: Metadata = {
  title: "Blog | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <div className="mt-5 py-8">
      <div className="mb-10">
        <h1 className="font-black capitalize text-3xl text-center">Blogs</h1>
      </div>
      {posts.map((post) => (
        <div key={post.id} className="mb-14">
          <Link href={`/blog/post/${post.slug.current}`}>
            <div className="flex h-96 bg-white border-1 shadow-md">
              <div className="w-1/2 relative bg-black">
                <Image
                  src={post.mainImage || ""}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(200, 200)
                  )}`}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-1/2 px-8 py-2 flex flex-col justify-between">
                <div>
                  <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold">
                    {post.title}
                  </h1>
                  <p>{post.description}</p>
                </div>
                <div className="border-t-1 flex justify-between pt-2">
                  <div className="flex gap-4">
                    <span>{post.comments} comments</span>
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HeartIcon className="h-5 w-5 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
