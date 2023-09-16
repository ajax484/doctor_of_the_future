import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  if (req.method === "POST") {
    const params = await req.json();
    const paystackUrl = "https://api.paystack.co/transaction/initialize";

    try {
      console.log(params);

      const paystackResponse = await axios.post(
        paystackUrl,
        {
          ...params,
          amount: params.amount * 100,
          callback_url: `http://localhost:3000/api/transactions/verify`,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY}`, // Replace with your actual Paystack API secret key
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
};
