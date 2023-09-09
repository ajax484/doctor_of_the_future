"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { BookingAccordion, useBookingContext } from "../../../layout";
import Link from "next/link";
import BookingForm from "./bookingForm";
import Button from "@/components/ui/customButton";

const Page = () => {
  const { currentBooking: booking, paymentMethod } = useBookingContext();
  const router = useRouter();

  console.log(paymentMethod, "mehtod");

  return (
    <div className="space-y-8 my-10">
      <button className="flex items-center gap-2" onClick={() => router.back()}>
        <ArrowLeft size={16} />{" "}
        <span className=" text-sm text-neutral-500">Back</span>
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-6 flex-[75%]">
          <h2 className="text-lg font-medium pb-2 border-b-[1px]">
            Fill out your details
          </h2>
          <div className="bg-gray-100 text-gray-500 px-4 py-2">
            Not user?{" "}
            <Link href={"/login"}>
              <span className="underline">switch account</span>
            </Link>
          </div>
          <BookingForm booking={booking} />
        </div>
        <div className="flex-[25%] space-y-4">
          <BookingAccordion />
          <Button
            label={paymentMethod === "plan" ? "Buy a Plan" : "Book Now"}
            type="submit"
            form="booking-form"
            intent="primary"
            onClick={() => router.push("form")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
