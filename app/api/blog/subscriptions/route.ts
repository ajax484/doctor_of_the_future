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

export const dynamic = "force-dynamic";
