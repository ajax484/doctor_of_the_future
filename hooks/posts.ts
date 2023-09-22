import { client } from "@/sanity/lib/client";
import groq from "groq";

export const getPosts = async () => {
  const queryPosts = groq`*[_type == "post"]{
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
  return posts;
};

// all categories
export const getCategory = async () => {
  const query = `*[_type == 'category']`;
  const categories = await client.fetch(query);
  return categories;
};

// category based on post type
export const getCategoriesLists = async ({ params }) => {
  const query = `
      *[_type == "post" && references(*[_type == "category" && slug.current == "${params.slug}"]._id)]
    `;

  const categoryList = await client.fetch(query);
  return categoryList;
};

// get comments
// fetch after successfully posting a comment
export const getComments = async () => {
  const querycomments = groq`*[_type == "comment"]`;

  const comments = await client.fetch(querycomments);
  return comments;
};
