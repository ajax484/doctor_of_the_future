import { getPosts } from "@/hooks/getPosts";
import Link from "next/link";
import React from "react";

// do not add use client to this

const Blog = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className=" my-10">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/post/${post.slug.current}`}>
            <h1>{post.title}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Blog;
