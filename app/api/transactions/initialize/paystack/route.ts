import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  if (req.method === "POST") {
    const params = await req.json();
    const paystackUrl = "https://api.paystack.co/transaction/initialize";

    // Determine the base URL for the callback URL based on the environment
    const baseURL =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_APP_URL // Production URL
        : "http://localhost:3000"; // Development URL

    try {
      // console.log(params);

      const paystackResponse = await axios.post(
        paystackUrl,
        {
          ...params,
          amount: params.amount * 100,
          callback_url: `${baseURL}/api/transactions/verify/paystack`,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_LIVE_KEY}`, // Replace with your actual Paystack API secret key
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = paystackResponse.data;
      return NextResponse.json({
        responseData,
        status: paystackResponse.status || 500,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "An error occurred while making the request.",
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
}

export const dynamic = "force-dynamic";
