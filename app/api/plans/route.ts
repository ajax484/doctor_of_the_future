import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PlanProps } from "@/types/products";

export async function GET(): Promise<NextResponse> {
  // Specify the return type as Promise<NextResponse>
  const supabase = createRouteHandlerClient({ cookies });

  try {
    let { data, error, status } = await supabase.from("plans").select("*");

    // console.log(data);

    if (error && status !== 406) {
      throw error;
    }

    if (!data) throw error;

    return NextResponse.json<PlanProps[]>(data);
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error: "An error occurred", status: 500 });
  }
}

export const dynamic = 'force-dynamic'
