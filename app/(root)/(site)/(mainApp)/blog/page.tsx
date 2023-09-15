import { getPosts } from "@/hooks/posts";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// do not add use client to this

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <div className="mt-5 py-8">
      <div className="mb-10">
        <h1 className=" font-black capitalize text-3xl text-center ">blogs</h1>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/post/${post.slug.current}`}>
            <div className="flex h-[500px] bg-white border-[1px] shadow-md">
              <div className="flex-[50%]  relative bg-black">
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
              <div className="flex-[50%] px-8 py-2 flex flex-col justify-between">
                <div>
                  <h1 className="uppercase">{post.title}</h1>
                  <p>{post.description}</p>
                </div>
                <div className="border-t-[1px] flex justify-between pt-2">
                  <div className="flex gap-4">
                    <span>{post.comments} comments</span>
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex gap-2">
                    <HeartIcon />
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
