import { client } from "@/sanity/lib/client";
import { Post } from "@/typings/typings";
import SinglePostDetail from "./SinglePostDetail";

interface Props {
  post: Post;
}

export default function Page({ post }: Props) {
  return <SinglePostDetail post={post} />;
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    _id,
    slug {
      current
    }
  }
  `;

  const posts = await client.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  // one produtc
  console.log(params?.slug);
  
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author -> {
      name,
      image,
    },
    "comments":*[_type == "comment" && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body
  }`;
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
