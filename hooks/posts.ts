import { toast } from "@/components/ui/use-toast";
import { client } from "@/sanity/lib/client";
import { getRequest, postRequest } from "@/utils/api";
import groq from "groq";
import { useMutation, useQuery } from "react-query";

export const getPosts = async () => {
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
  return posts;
};

export const useGetPost = ({ slug }: { slug: string }) => {
  // console.log(slug);
  const {
    data: post,
    isFetching: postIsFetching,
    error: postError,
  } = useQuery(["post", slug], async () => {
    // console.log(slug);
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
    // console.log(post);
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

export const useGetPostLike = ({ slug }: { slug: string }) => {
  const {
    data: postLike,
    isFetching: fetchingPostLike,
    error: fetchingPostLikeError,
    refetch: refetchPostLike,
  } = useQuery({
    queryKey: ["get postlikes data", slug],
    queryFn: async () => {
      const { data } = await getRequest({
        endpoint: `/api/blog/postActions/${slug}/likes`,
      });
      // console.log(data);

      return data.data;
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000,
  });

  return {
    postLike: postLike || { data: [], count: 0 },
    fetchingPostLike,
    fetchingPostLikeError,
    refetchPostLike,
  };
};

export const UseToggleLikes = ({
  slug,
  refetchPostLike,
}: {
  slug: string;
  refetchPostLike: () => {};
}) => {
  const {
    mutate: toggleLikes,
    isLoading: performingToggleLikes,
    error: toggleLikesError,
  } = useMutation({
    mutationFn: async ({ is_liked }: { is_liked: boolean }) => {
      // console.log(is_liked, slug);
      const { data } = await postRequest({
        endpoint: `/api/blog/postActions/${slug}/likes`,
        payload: { is_liked },
      });
      // console.log(data);

      if (data?.status !== 200) {
        throw data?.error;
      }
      return data;
    },
    onSuccess: (values) => {
      // console.log(values.data, "returned like");
      const { is_liked } = values.data;
      toast({
        title: !is_liked ? "Post Liked" : "Post Unliked",
      });
      refetchPostLike();
    },
    onError: (error) => {
      // console.log(error);

      // toast({
      //   title: "An error has occurred",
      // });
    },
  });

  return {
    performingToggleLikes,
    toggleLikesError,
    toggleLikes,
  };
};

export const useGetPostViews = ({ slug }: { slug: string }) => {
  const {
    data: postViews,
    isFetching: fetchingPostViews,
    error: fetchingPostViewsError,
    refetch: refetchPostViews,
  } = useQuery({
    queryKey: ["get postviews data", slug],
    queryFn: async () => {
      const { data } = await getRequest({
        endpoint: `/api/blog/postActions/${slug}/views`,
      });
      // console.log(data);

      return data.data;
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000,
  });

  return {
    postViews: postViews || { data: [], count: 0 },
    fetchingPostViews,
    fetchingPostViewsError,
    refetchPostViews,
  };
};

export const UseAddViews = ({
  slug,
  refetchPostViews,
}: {
  slug: string;
  refetchPostViews: () => {};
}) => {
  const {
    mutate: addViews,
    isLoading: performingAddViews,
    error: addViewsError,
  } = useMutation({
    mutationFn: async () => {
      // console.log(slug);
      const { data } = await postRequest({
        endpoint: `/api/blog/postActions/${slug}/views`,
        payload: {},
      });
      // console.log(data);

      if (data?.status !== 200) {
        throw data?.error;
      }
      return data;
    },
    onSuccess: (values) => {
      refetchPostViews();
    },
    onError: (error) => {
      // console.log(error);

      // toast({
      //   title: "An error has occurred",
      // });
    },
  });

  return {
    performingAddViews,
    addViewsError,
    addViews,
  };
};
