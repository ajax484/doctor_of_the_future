

import { toast } from "@/components/ui/use-toast";
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

export const useGetPost = ({ slug }: { slug: string }) => {
  console.log(slug);
  const {
    data: post,
    isFetching: postIsFetching,
    error: postError,
  } = useQuery(["post", slug], async () => {
    console.log(slug);
    const query = groq`*[_type == "post" && slug.current == '${slug}'][0]{
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
    return post;
  });

  return { post, postIsFetching, postError };
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
