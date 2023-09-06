"use client";
import Loading from "@/components/ui/Loading";
import BookingCard from "@/components/ui/bookingCard";
import { useGetBookings } from "@/hooks/bookings";
import { BookingProps } from "@/types/products";
import React from "react";

export const Page = () => {
  const { bookings, fetchingbookings, fetchingbookingsError } =
    useGetBookings();

  console.log(bookings);

  return (
    <Loading loading={fetchingbookings} error={!!fetchingbookingsError}>
      <div className="grid md:grid-cols-2 gap-4">
        {bookings.map((booking: BookingProps) => (
          <BookingCard key={booking.name} {...booking} />
        ))}
      </div>
    </Loading>
  );
};

export default Page;
