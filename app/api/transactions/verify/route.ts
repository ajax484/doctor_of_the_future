import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { typeMapping } from "@/utils/helpers";

export async function GET(req: NextApiRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const reference = searchParams.get("reference");
    const supabase = createRouteHandlerClient({ cookies });

    const paystackUrl = `https://api.paystack.co/transaction/verify/${reference}`;
    const paystackResponse = await axios.get(paystackUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY}`, // Replace with your actual Paystack API secret key
      },
    });

    const { amount, metadata } = paystackResponse.data.data;
    const refThree = reference.split("-")[0];
    const prdtType = typeMapping[refThree];
    console.log(reference, refThree, prdtType);
    let { data, error, status } = await supabase
      .from(`user_${prdtType}`)
      .insert({ amount: amount / 100, ...metadata, reference });

    if (error) {
      throw error;
    }

    // return NextResponse.redirect(new URL("/", "http://localhost:3000"));
    return NextResponse.json({ amount: amount / 100, ...metadata, reference });
  } catch (error) {
    // Handle the error here if needed
    console.log(error);

    return NextResponse.json({ error });
    // return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  }
}

export const dynamic = "force-dynamic";
