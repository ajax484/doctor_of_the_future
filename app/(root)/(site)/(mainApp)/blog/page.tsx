import BlogCard from "@/components/ui/blogcard";
import { getPosts } from "@/hooks/posts";
import React from "react";

const Blog = async () => {
  const posts = await getPosts();


  return (
    <div className="mt-5 mb-14 py-8">
      <div className="mb-10">
        <h1 className="font-black capitalize text-3xl text-center">Blogs</h1>
      </div>
      {posts.map((post) => (
        <BlogCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Blog;
