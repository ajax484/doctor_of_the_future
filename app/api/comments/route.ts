import { client } from "@/sanity/lib/client";
import { useUser } from "@supabase/auth-helpers-react";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { _id, name, email, comment } = body;

  if (!name || !email || !comment) {
    return new NextResponse("Name is required", { status: 400 });
  }

  try {
    await client.create({
      _type: "comment",
      shop: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });

    return NextResponse.json("comment created", { status: 200 });
  } catch (error) {
    //error
    console.log("Post error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
