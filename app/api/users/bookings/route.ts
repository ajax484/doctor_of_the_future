import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(): Promise<NextResponse> {
  // Specify the return type as Promise<NextResponse>
  try {
    const date = new Date().toISOString();
    const supabase = createRouteHandlerClient({ cookies });
    let { data, error, status } = await supabase
      .from("user_bookings")
      .select("time_of_session")
      .gt("time_of_session", date);

    // console.log(data, error, status);

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.json({ error: "An error occurred", status: 500 });
  }
}

export const dynamic = "force-dynamic";
