import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const userId = data.session?.user.id;

  try {
    let { data, error, status } = await supabase
      .from(`user_subscriptions`)
      .select("*")
      .eq("user_id", userId)
      .eq("is_current", true)
      .maybeSingle();

    // console.log(data, error);

    if (error && status !== 200) {
      throw error;
    }

    return NextResponse.json({ data, status: 200 });
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error, status: 500 });
  }
}

export const dynamic = "force-dynamic";
