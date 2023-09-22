import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { typeMapping } from "@/utils/helpers";
import { Resend } from "resend";
import {
  CustomerBookingEmail,
  VendorBookingEmail,
} from "@/components/EmailTemplates/BookingTemplate";
import { getRequest } from "@/utils/api";
import { BookingProps } from "@/types/products";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { amount, metadata, status: trxStatus } = paystackResponse.data.data;
    const refThree = reference.split("-")[0];
    const prdtType = typeMapping[refThree];
    console.log(metadata, trxStatus);
    let { data, error, status } = await supabase
      .from(`user_${prdtType}`)
      .insert({
        amount: amount / 100,
        ...metadata,
        reference,
        status: trxStatus,
      });

    if (error) {
      throw error;
    }

    if (prdtType === "bookings") {
      const {
        name,
        email,
        message,
        payment_method,
        payment_type,
        phone_number,
        reference,
        time_of_session,
        booking_id,
      } = metadata;

      const {
        data: booking,
        error,
        status,
      } = (await supabase
        .from("bookings")
        .select("*")
        .eq("id", booking_id)
        .maybeSingle()) as unknown as BookingProps;

      const customerResendData = await resend.emails.send({
        from: "Doctor of The Future <onboarding@resend.dev>",
        to: [email],
        subject: `Booking confirmed for ${metadata.name}`,
        react: ({
          name,
          email,
          message,
          payment_method,
          payment_type,
          phone_number,
          reference,
          bookingName: booking.name,
          time_of_session,
        }),
      });

      const vendorResendData = await resend.emails.send({
        from: "Doctor of The Future <onboarding@resend.dev>",
        to: ["gidietsworld@gmail.com"],
        subject: `Booking confirmed for ${metadata.name}`,
        react: VendorBookingEmail({
          name,
          email,
          message,
          payment_method,
          payment_type,
          phone_number,
          bookingName: booking.name,
          reference,
          time_of_session,
        }),
      });
    }

    // Determine the redirect URL conditionally
    let redirectURL;
    if (process.env.NODE_ENV === "production") {
      // Use the production public_url
      redirectURL = process.env.NEXT_PUBLIC_APP_URL;
    } else {
      // Use localhost:3000 for development
      redirectURL = "http://localhost:3000";
    }

    return NextResponse.redirect(
      new URL(
        `/transaction/result?status=${trxStatus}&reference=${reference}&prdtType=${prdtType}`,
        redirectURL
      )
    );
    // return NextResponse.json({ amount: amount / 100, ...metadata, reference });
  } catch (error) {
    // Handle the error here if needed
    console.log(error);

    return NextResponse.json({ error });
    // return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  }
}

export const dynamic = "force-dynamic";