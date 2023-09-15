"use client";
import { Post } from "@/typings/typings";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PortableText from "react-portable-text";
import { SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { urlForImage } from "@/sanity/lib/image";
import { convertDateFormat } from "@/utils/helpers";
import { HeartIcon } from "lucide-react";

interface Props {
  post: Post;
}

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

const SinglePostDetail = ({ post }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // submitted
  const onsubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
        toast.success("submitted for approval");
      })
      .catch((err) => {
        setSubmitted(false);
      });
  };

  console.log(post);

  return (
    <>
      <article className="border-[1px] mx-10 my-10 py-10 px-5 space-y-6">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-sm text-slate-700">
              {convertDateFormat(post.publishedAt)}
            </span>
          </div>
        </div>
        <h1 className="text-center uppercase text-3xl font-semibold text-slate-900">
          {post.title}
        </h1>
        {/* <div>
        <Image
          alt="post image"
          width="1000"
          height="1000"
          className="w-full h-72 object-cover"
          src={urlForImage(post?.mainImage?.asset?._url).url()!}
        />
      </div> */}
        <p className="text-center text-slate-600">{post.description}...</p>

        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cze1d23v"}
          content={post.body}
          serializers={{
            h1: (props: any) => {
              <h1
                className="text-3xl font-semibold py-5 text-slate-700"
                {...props}
              />;
            },
            h2: (props: any) => {
              <h2 className="text-2xl font-semibold py-5 " {...props} />;
            },
            h3: (props: any) => {
              <h3
                className="text-2xl font-semibold my-5 text-slate-800"
                {...props}
              />;
            },
            p: (props: any) => {
              <p className="text-base my-5 text-slate-700" {...props} />;
            },
            link: ({ href, children }: any) => {
              <a href={href} className="text-limeGreen hover:underline"></a>;
            },
          }}
        />
        <div className="flex gap-2 flex-wrap">
          {post.categories.map((category) => (
            <div
              className="border-[1px] px-3 py-0.5 text-slate-700 capitalize"
              key={category.title}
            >
              {category.title}
            </div>
          ))}
        </div>
        <div className="border-t-[1px] flex justify-between pt-2 text-slate-600 text-sm">
          <div className="flex gap-4">
            <span>{post.commentNumber} comments</span>
            <span>{post.views} views</span>
          </div>
          <div className="flex gap-2">
            <HeartIcon />
            <span>{post.likes}</span>
          </div>
        </div>
      </article>
      <div className="flex flex-col-reverse gap-y-20 w-full gap-x-20 px-10">
        <div className="w-full order-2 md:order-1">
          <h1 className="capitalize text-sm text-slate-700">comment section</h1>
          <p>leave a comment below and join the discussion</p>

          <div className="my-10">
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex capitalize flex-col gap-y-5"
            >
              <div className="flex gap-x-2 items-center">
                <label>name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="p-2 w-full bg-transparent outline-none text-white "
                  placeholder="enter name"
                />
              </div>

              <div className="flex capitalize gap-x-2 items-center">
                <label>email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="p-2 w-full bg-transparent outline-none text-white "
                  placeholder="enter email"
                />
              </div>
              <div className="flex flex-col gap-x-2 gap-y-4 capitalize">
                <label>enter message</label>
                <textarea
                  {...register("comment", { required: true })}
                  className="w-full bg-transparent h-[200px] resize-none"
                  placeholder="enter message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-enter w-full bg-gray-900 p-2 hover:brightness-95 hover:bg-gray-700 transition-all ease-in-out duration-300"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full order-1 md:order-2 space-y-2">
          <h2 className="capitalize text-sm text-slate-700">
            all comments on this post
          </h2>

          <div className="border my-5 py-5 h-max">
            {post.comments?.map((comment) => (
              <div
                className="flex flex-col gap-y-4 text-white"
                key={comment._id}
              >
                <span>
                  <p>{comment.name}</p>
                  <p>{comment.comment}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <main className="section">
      <div>
        {/* <Image
          alt="post image"
          width="1000"
          height="1000"
          className="w-full h-72 object-cover"
          src={urlForImage(post?.mainImage).url()!}
        /> */}
      </div>

      <article className="my-10 border p-4 md:p-10 w-full md:w-[800px] container text-justify md:text-center">
        <h1 className="text-center uppercase text-3xl font-semibold">
          {post.title}
        </h1>

        <p className="text-center">{post.description}...</p>

        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cze1d23v"}
          content={post.body}
          serializers={{
            h1: (props: any) => {
              <h1 className="text-3xl font-semibold py-5 " {...props} />;
            },
            h2: (props: any) => {
              <h2 className="text-2xl font-semibold py-5 " {...props} />;
            },
            h3: (props: any) => {
              <h3 className="text-2xl font-semibold my-5 " {...props} />;
            },
            p: (props: any) => {
              <p className="text-base my-5 " {...props} />;
            },
            link: ({ href, children }: any) => {
              <a href={href} className="text-blue-400 hover:underline"></a>;
            },
          }}
        />

        <div className="flex gap-y-5 border-b py-5 text-gray-500 container flex-col gap-x-2">
          <p className="text-white">{post.description}</p>
          <span className="flex gap-x-2">
            {/* <Image
              alt="post image"
              width="1000"
              height="1000"
              className="w-10 h-10 rounded-full object-cover"
              src={urlForImage(post.author.image)?.url() || ""}
            /> */}
            <span className="flex flex-col gap-x-2">
              <span className="flex gap-x-2 text-gray-500 gap-y-4 capitalize items-center">
                <p>post by:</p>
                <p className="text-blue-500">{post.author.name}</p>
              </span>
              <span>
                <p>
                  Posted On: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </span>
            </span>
          </span>
        </div>
      </article>

      {/* commetnts */}

      <section className="flex flex-col md:flex-row gap-y-20 w-full gap-x-20">
        <main className="w-full order-2 md:order-1">
          <h1 className="uppercase text-2xl font-semibold">comment section</h1>
          <p>leave a comment below and join the discussion</p>

          <div className="my-10">
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex capitalize flex-col gap-y-5"
            >
              <div className="flex gap-x-2 items-center">
                <label>name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="p-2 w-full bg-transparent outline-none text-white "
                  placeholder="enter name"
                />
              </div>

              <div className="flex capitalize gap-x-2 items-center">
                <label>email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="p-2 w-full bg-transparent outline-none text-white "
                  placeholder="enter email"
                />
              </div>
              <div className="flex flex-col gap-x-2 gap-y-4 capitalize">
                <label>enter message</label>
                <textarea
                  {...register("comment", { required: true })}
                  className="w-full bg-transparent h-[200px] resize-none"
                  placeholder="enter message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-enter w-full bg-gray-900 p-2 hover:brightness-95 hover:bg-gray-700 transition-all ease-in-out duration-300"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </main>
        <main className="w-full order-1 md:order-2 ">
          <h1 className="uppercase text-2xl font-semibold">
            all comments on this post
          </h1>

          <div className="border my-5 py-5 h-max">
            {post.comments?.map((comment) => (
              <div
                className="flex flex-col gap-y-4 text-white"
                key={comment._id}
              >
                <span>
                  <p>{comment.name}</p>
                  <p>{comment.comment}</p>
                </span>
              </div>
            ))}
          </div>
        </main>
      </section>
      <Toaster />
    </main>
  );
};

export default SinglePostDetail;
