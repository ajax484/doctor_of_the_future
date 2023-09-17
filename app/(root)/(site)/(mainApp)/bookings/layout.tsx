"use client";
import { BookingProps } from "@/types/products";
import React, { createContext, useContext, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoVideocam } from "react-icons/io5";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { formatDateToHumanReadable } from "@/utils/helpers";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useLocalState } from "@/hooks/useLocalStorage";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Online | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
import { BookingFormValues } from "./(mainpage)/[name]/form/bookingForm";

interface SiteProps {
  children: React.ReactNode;
}

type TBookingContext = {
  currentBooking: BookingProps;
  changeBooking: (booking: BookingProps) => void;
  date: Date | undefined;
  changeDate: (date: Date) => void;
  timeSlot: TTimeSlot;
  changeSlot: (timeSlot: TTimeSlot) => void;
  payment_method: string;
  changeMethod: (method: string) => void;
  formValues: BookingFormValues | {};
  changeFormValues: (formValues: BookingFormValues) => void;
};

export type TTimeSlot = {
  label: string;
  value: string;
};

const BookingContext = createContext<TBookingContext>({
  currentBooking: { name: "", description: "", id: "", image: "", price: 0 },
  changeBooking(booking) {},
  date: new Date(),
  changeDate(date) {},
  timeSlot: {
    label: "9:00 AM",
    value: "09:00:00",
  },
  changeSlot(timeSlot) {},
  payment_method: "",
  changeMethod(method) {},
  formValues: {},
  changeFormValues(formValues) {},
});

export const TIMESLOTS: TTimeSlot[] = [
  { label: "9:00 AM", value: "09:00:00" },
  { label: "9:30 AM", value: "09:30:00" },
  { label: "10:00 AM", value: "10:00:00" },
  { label: "10:30 AM", value: "10:30:00" },
  { label: "11:00 AM", value: "11:00:00" },
  { label: "11:30 AM", value: "11:30:00" },
  { label: "12:00 PM", value: "12:00:00" },
  { label: "12:30 PM", value: "12:30:00" },
  { label: "1:00 PM", value: "13:00:00" },
  { label: "1:30 PM", value: "13:30:00" },
  { label: "2:00 PM", value: "14:00:00" },
  { label: "2:30 PM", value: "14:30:00" },
];

const BookingLayout = ({ children }: SiteProps) => {
  const [currentBooking, setBooking] = useLocalState({
    defaultValue: {
      name: "",
      description: "",
      id: "",
      image: "",
      price: 0,
    },
    stateKey: "currentBooking",
  });
  const [date, setDate] = React.useState<Date>(new Date());
  const [timeSlot, setTimeSlot] = React.useState<TTimeSlot>({
    label: "9:00 AM",
    value: "09:00:00",
  });
  const [payment_method, setMethod] = useState<string>("");
  const [formValues, setValues] = useState<BookingFormValues | {}>({});

  const changeBooking = (booking: BookingProps) => setBooking(booking);
  const changeDate = (date: Date) => setDate(date);
  const changeSlot = (newSlot: TTimeSlot) => setTimeSlot(newSlot);
  const changeMethod = (method: string) => setMethod(method);
  const changeFormValues = (formValues: BookingFormValues) =>
    setValues(formValues);

  const value: TBookingContext = {
    currentBooking,
    changeBooking,
    date,
    changeDate,
    timeSlot,
    changeSlot,
    payment_method,
    changeMethod,
    formValues,
    changeFormValues,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);

export function BookingAccordion() {
  const { session } = useSessionContext();
  const { currentBooking: booking, date, timeSlot } = useBookingContext();

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base">
            Service Details
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="border-[1px] px-1 py-2 rounded-xl flex gap-2 items-center w-fit">
                <IoVideocam /> <span className="text-sm">Available Online</span>
              </div>
              <div>
                <h4 className="text-base font-semibold my-2 capitalize text-slate-900">
                  {booking.name}
                </h4>
                <h5 className="text-base text-slate-900">
                  {formatDateToHumanReadable(date)} at {timeSlot.label}
                </h5>
              </div>
              <div>
                <div className="text-sm text-slate-600">
                  {session?.user.email}
                </div>
                <div className="text-sm text-slate-600">
                  {formatPriceToNaira(booking.price)}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default BookingLayout;
