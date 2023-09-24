import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  //   const postId = req.query.postId;
  const body = await req.json();
  const { _id, name, email, comment, postId } = body; 

  try {
    const viewCount = await client.fetch(`*[_id == $postId][0].views`, { postId }) 
    // Send the updated views count as a JSON response
    return NextResponse.json(viewCount, { status: 200 });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
