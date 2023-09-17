"use client";
import Loading from "@/components/ui/Loading";
import BookingCard from "@/components/ui/bookingCard";
import { useGetBookings } from "@/hooks/bookings";
import { BookingProps } from "@/types/products";
import React, { Suspense } from "react";
import { useBookingContext } from "../layout";
import { Metadata } from "next";
import { siteConfig } from "@/app/(root)/siteConfig/page";


// export const metadata: Metadata = {
//   title: "Bookings | " + siteConfig.name,
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };



export const Bookings = () => {
  const { bookings, fetchingbookings, fetchingbookingsError } =
    useGetBookings();
  const { changeBooking } = useBookingContext()

  // console.log(bookings);

  return (
   <Suspense>
     <Loading loading={fetchingbookings} >
      <div className=" my-10 mb-20">
      <div className="my-5">
        <h1 className=" text-center text-3xl capitalize font-black">bookings</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
        {bookings?.map((booking: BookingProps) => (
          <BookingCard
            key={booking.name}
            {...booking}
            changeBooking={changeBooking}
          />
        ))}
      </div>
      </div>
    </Loading>
   </Suspense>
  );
};

export default Bookings;
