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
      const flutterwaveResponse = await axios.post(
        "https://api.flutterwave.com/v3/payments",
        {
          tx_ref: params.reference,
          amount: params.amount,
          currency: "NGN",
          redirect_url: `${baseURL}/api/transactions/verify/flutterwave`,
          meta: params.metadata,
          customer: {
            email: params.email,
          },
          customizations: {
            title: "Pied Piper Payments",
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_LIVE_KEY}`,
          },
        }
      );

      const responseData = flutterwaveResponse.data;
      console.log(responseData);

      return NextResponse.json({
        data: { link: responseData?.data?.link },
        status: flutterwaveResponse.status || 500,
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
