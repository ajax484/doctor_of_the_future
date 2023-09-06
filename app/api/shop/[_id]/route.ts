import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  const _id = params._id;
  const supabase = createRouteHandlerClient({ cookies });

  try {
    let { data, error, status } = await supabase
      .from("shop")
      .select("*")
      .eq("id", _id)
      .maybeSingle();

    console.log(data);

    if (error && status !== 200) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error, status: 500 });
  }
}
