import { client } from "@/sanity/lib/client";
import groq from "groq";
import React from "react";
import SinglePostDetail from "./SinglePostDetail";
import { Metadata } from "next";
import { siteConfig } from "@/app/(root)/siteConfig/page";

// do not add use client to this

export const metadata: Metadata = {
  title: "Blog Description | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export interface BlogProps {
  params: {
    slug: string;
  };
}

const BlogDetails = async ({ params }: BlogProps) => {
  // const query = groq`*[_type == "post" && slug.current == '${params.slug}'][0]{title, "name": author->name}`;
  // get comments
  const querycomments = groq`*[_type == "comment"]`;

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
  // console.log(post);

  const comments = await client.fetch(querycomments);
  console.log(comments);

  return (
    <SinglePostDetail slug={params.slug} post={post} comments={comments} />
  );
};

export default BlogDetails;
