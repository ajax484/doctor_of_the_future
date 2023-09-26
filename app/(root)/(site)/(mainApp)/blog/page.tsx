import BlogCard from "@/components/ui/blogcard";
import { getPosts } from "@/hooks/posts";
import { client } from "@/sanity/lib/client";
import groq from "groq";
import React from "react";

const Blog = async () => {
  const queryPosts = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt asc){
    _id,
    title,
    author -> {
      name,
      image
    },
    categories -> {
      title,
      description
    },
    description,
    mainImage,
    slug,
    "views": count(*[_type == "view" && references(^._id)]),
    "comments": count(*[_type == "comment" && references(^._id)]),
    "likes": count(*[_type == "like" && references(^._id)])
  }
  `;
  const posts = await client.fetch(
    queryPosts,
    { cache: "no-store" },
    { next: { revalidate: 3600 } }
  );

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
