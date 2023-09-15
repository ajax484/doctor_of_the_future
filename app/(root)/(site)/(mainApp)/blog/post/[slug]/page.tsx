import { client } from "@/sanity/lib/client";
import groq from "groq";
import React from "react";
import SinglePostDetail from "./SinglePostDetail";

// do not add use client to this

interface BlogProps {
  params: {
    slug: string;
  };
}

const BlogDetails = async ({ params }: BlogProps) => {
  // const query = groq`*[_type == "post" && slug.current == '${params.slug}'][0]{title, "name": author->name}`;
  const query = groq`*[_type == "post" && slug.current == '${params.slug}'][0]{
    _id,
    title,
    content,
    publishedAt,
    mainImage,
    body,
    "views": count(*[_type == "view" && references(^._id)]),
    "commentNumber": count(*[_type == "comment" && references(^._id)]),
    "likes": count(*[_type == "like" && references(^._id)]),
    categories[]->{  // Fetch all categories associated with the post
      title,
      description
    },
    author->{
      _id,
      name,
      image
    },
    comments[]{
      _id,
      text,
      author->{
        _id,
        name
      }
    }
  }  
  `;
  const post = await client.fetch(query);
  console.log(post);

  return <SinglePostDetail post={post} />;
};

export default BlogDetails;
