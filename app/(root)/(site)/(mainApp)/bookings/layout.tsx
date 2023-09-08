"use client";
import { BookingProps } from "@/types/products";
import React, { createContext, useContext, useState } from "react";

interface SiteProps {
  children: React.ReactNode;
}

type TBookingContext = {
  currentBooking: BookingProps | {};
  changeBooking: (booking: BookingProps) => void;
};

const BookingContext = createContext<TBookingContext>({
  currentBooking: {},
  changeBooking(booking) {},
});

const BookingLayout = ({ children }: SiteProps) => {
  const [currentBooking, setBooking] = useState({});

  const changeBooking = (booking: BookingProps) => setBooking(booking);

  const value: TBookingContext = {
    currentBooking,
    changeBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);

export default BookingLayout;
