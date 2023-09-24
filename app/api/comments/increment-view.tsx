import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req:Request, res: Response) {
  const postId = req.query.postId;

  try {
    // Increment the views for the specified post
    await client
      .patch(postId)
      .inc({ views: 1 })
      .commit();

    // Get the updated views count
    const post = await client.getDocument(postId);
    const views = post?.views || 0;

    // Send the updated views count as a JSON response
    return NextResponse.json(views, { status: 200 });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
