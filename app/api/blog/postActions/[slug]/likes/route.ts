import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  // console.log(slug);

  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const userId = data.session?.user.id;

  try {
    let { data, error, status, count } = await supabase
      .from(`post_likes`)
      .select("*", { count: "exact" })
      .eq("slug", slug);

    // console.log(data, error);

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
  const { is_liked } = await request.json();
  // console.log(is_liked, slug);

  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const user_id = data.session?.user.id;

  try {
    let query;
    if (is_liked) {
      query = await supabase
        .from(`post_likes`)
        .delete()
        .eq("slug", slug)
        .eq("user_id", user_id);
    } else {
      query = await supabase
        .from(`post_likes`)
        .insert({ slug, user_id })
        .select();
    }

    const { data, error, status } = query;

    // console.log(data, error);.

    if (error) {
      throw error;
    }

    return NextResponse.json({ data: { is_liked }, status: 200 });
  } catch (error) {
    // Handle the error here if needed
    console.log(error);

    return NextResponse.json({ error, status: 500 });
  }
}

export const dynamic = "force-dynamic";
