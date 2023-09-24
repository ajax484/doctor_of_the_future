import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { _id, name, email, comment, postId } = body; // Include postId in the request body

  if (!name || !email || !comment || !postId) {
    return new NextResponse("Name, email, comment, and postId are required", { status: 400 });
  }

  try {
    // Use the postId to associate the comment with the specific blog post
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: postId,
      },
      name,
      email,
      comment,
    });

    return NextResponse.json("Comment created", { status: 200 });
  } catch (error) {
    console.error("Error creating comment", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
