import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: { _id: string } }
) {
  const searchParams = req.nextUrl.searchParams;
  const JSONIds = searchParams.get("ids");
  const ids = JSON.parse(JSONIds);
  const supabase = createRouteHandlerClient({ cookies });

  try {
    let { data, error, status } = await supabase
      .from("book_links")
      .select("*, item:shop!inner(*)")
      .in("id", ids);

    // console.log(data);

    if (error && status !== 200) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error, status: 500 });
  }
}

export const dynamic = "force-dynamic";
