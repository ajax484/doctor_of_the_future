import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      reference: string;
      prdtType: string;
    };
  }
) {
  const prdtType = params.prdtType;
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const userId = data.session?.user.id;

  // console.log(reference, prdtType);

  try {
    let { data, error, status } = await supabase
      .from(`user_${prdtType}`)
      .select("*")
      .eq("user_id", userId);

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
