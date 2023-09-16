import { getPosts } from "@/hooks/posts";
import { urlForImage } from "@/sanity/lib/image";
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
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/post/${post.slug.current}`}>
              <div className="flex flex-col md:flex-row bg-white border-[1px] shadow-md">
                <div className="flex-[50%] relative h-[250px]">
                  <Image
                    src={urlForImage(post?.mainImage?.asset?._ref).url()}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(200, 200)
                    )}`}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="flex-[50%] px-8 py-2 flex flex-col justify-start md:justify-between gap-4 md:gap-0">
                  <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase">
                      {post.title}
                    </h1>
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
    </div>
  );
};

export default Blog;
