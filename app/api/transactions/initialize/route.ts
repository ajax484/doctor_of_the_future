import axios from "axios";
import https from "https";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  if (req.method === "POST") {
    const params = req.body;
    const paystackUrl = "https://api.paystack.co/transaction/initialize";

    console.log(process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY);

    try {
      const paystackResponse = await axios.post(paystackUrl, params, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY}`, // Replace with your actual Paystack API secret key
          "Content-Type": "application/json",
        },
      });

      const responseData = paystackResponse.data;
      NextResponse.json({
        responseData,
        status: paystackResponse.status || 500,
      });
    } catch (error) {
      console.error(error);
      NextResponse.json({
        error: "An error occurred while making the request.",
        status: 500,
      });
    }
  } else {
    NextResponse.json({ error: "Method not allowed", staus: 405 });
  }
}

export const dynamic = "force-dynamic";
