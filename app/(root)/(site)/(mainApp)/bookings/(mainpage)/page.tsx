"use client";
import Loading from "@/components/ui/Loading";
import BookingCard from "@/components/ui/bookingCard";
import { useGetBookings } from "@/hooks/bookings";
import { BookingProps } from "@/types/products";
import React from "react";
import { useBookingContext } from "../layout";

export const Bookings = () => {
  const { bookings, fetchingbookings, fetchingbookingsError } =
    useGetBookings();
  const { changeBooking } = useBookingContext()

  console.log(bookings);

  return (
    <Loading loading={fetchingbookings} error={!!fetchingbookingsError}>
      <div className=" my-10">
      <div className=" my-5">
        <h1 className=" text-center text-3xl capitalize font-black">bookings</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
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
  );
};

export default Bookings;
