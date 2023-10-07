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
import { BookingProps } from "@/types/products";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextApiRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const reference = searchParams.get("tx_ref");
    const trxId = searchParams.get("transaction_id");
    const currstatus = searchParams.get("status");

    // Determine the redirect URL conditionally
    let redirectURL;
    if (process.env.NODE_ENV === "production") {
      // Use the production public_url
      redirectURL = process.env.NEXT_PUBLIC_APP_URL;
    } else {
      // Use localhost:3000 for development
      redirectURL = "http://localhost:3000";
    }

    if (currstatus === "cancelled") {
      return NextResponse.redirect(new URL("", redirectURL));
    }

    const supabase = createRouteHandlerClient({ cookies });
    console.log(trxId);

    const flutterwaveUrl = `https://api.flutterwave.com/v3/transactions/${trxId}/verify`;
    const flutterwaveResponse = await axios.get(flutterwaveUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_LIVE_KEY}`, // Replace with your actual Flutterwave API secret key
      },
    });

    if (flutterwaveResponse?.data?.status !== "success")
      throw flutterwaveResponse?.data?.message;

    console.log(flutterwaveResponse);
    const { amount, meta } = flutterwaveResponse.data.data;
    const trxStatus = flutterwaveResponse?.data?.status;
    console.log(meta);
    delete meta.__CheckoutInitAddress;
    const refThree = reference.split("-")[0];
    const prdtType = typeMapping[refThree];
    const params = {
      amount,
      ...meta,
      books: typeof meta.books === "string" ? [meta.books] : meta.books,
      reference,
      status: trxStatus,
      payment_method: meta.payment_method,
    };

    if (prdtType === "shop") {
      params.books = typeof meta.books === "string" ? [meta.books] : meta.books;
    }
    let { data, error, status } = await supabase
      .from(`user_${prdtType}`)
      .insert(params);

    if (error) {
      throw error;
    }

    if (prdtType === "bookings") {
      const {
        name,
        email,
        payment_method,
        payment_type,
        phone_number,
        reference,
        time_of_session,
        booking_id,
      } = meta;

      const message = meta.message || "";

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
        subject: `Booking confirmed for ${meta.name}`,
        react: CustomerBookingEmail({
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
        subject: `Booking confirmed for ${meta.name}`,
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

    return NextResponse.redirect(
      new URL(
        `/transaction/result?status=${trxStatus}&reference=${reference}&prdtType=${prdtType}`,
        redirectURL
      )
    );
    // return NextResponse.json({ amount: amount / 100, ...meta, reference });
  } catch (error) {
    // Handle the error here if needed
    // console.log(error);

    return NextResponse.json({ error });
    // return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  }
}

export const dynamic = "force-dynamic";
