import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const userId = data.session?.user.id;

  try {
    let { data, error, status, count } = await supabase
      .from(`post_likes`)
      .select("*", { count: "exact" })
      .eq("slug", slug)
      .maybeSingle();

    console.log(data, error);

    if (error && status !== 200) {
      throw error;
    }

    return NextResponse.json({ data: { data, count }, status: 200 });
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error, status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const { currentLike } = request.body;

  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const user_id = data.session?.user.id;

  try {
    let { data, error, status } = await supabase
      .from(`post_likes`)
      .upsert({ user_id, slug, currentLike }, { ignoreDuplicates: false });

    // console.log(data, error);

    if (error) {
      throw error;
    }

    return NextResponse.json({ data, status: 200 });
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error, status: 500 });
  }
}

export const dynamic = "force-dynamic";
