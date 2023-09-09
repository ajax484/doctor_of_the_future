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
        <div className="text-center">
          <h1 className="mb-8 font-semibold text-3xl text-center">Bookings</h1>
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
