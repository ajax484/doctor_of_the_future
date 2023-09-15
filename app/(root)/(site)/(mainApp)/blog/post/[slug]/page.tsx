import { client } from '@/sanity/lib/client';
import groq from 'groq';
import React from 'react'

// do not add use client to this

interface BlogProps {
  params: {
    slug: string;
  };
}


const BlogDetails = async ({params} : BlogProps) => {
   // get product details
   const query = groq`*[_type == "post" && slug.current == '${params.slug}'][0]`
   const post = await client.fetch(query);
   console.log(post)

  return (
    <div>
      <p>{post.title}</p>
    </div>
  )
}

export default BlogDetails;
