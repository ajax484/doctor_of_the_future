import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const searchParams = req.nextUrl.searchParams;

  try {
    // const paystackUrl = `https://api.paystack.co/transaction/verify/${reference}`;
    // const paystackResponse = await axios.get(paystackUrl, {
    //   headers: {
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY}`, // Replace with your actual Paystack API secret key
    //   },
    // });

    console.log(searchParams);

    return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  } catch (error) {
    // Handle the error here if needed
    return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  }
}

export const dynamic = "force-dynamic";
