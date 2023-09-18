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
  const reference = params.reference;
  const prdtType = params.prdtType;
  const supabase = createRouteHandlerClient({ cookies });

  console.log(reference, prdtType);

  try {
    let { data, error, status } = await supabase
      .from(`user_${prdtType}`)
      .select("*")
      .eq("reference", reference)
      .maybeSingle();

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
