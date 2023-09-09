"use client";
import { Calendar } from "@/components/ui/calendar";
import { formatDateToHumanReadable } from "@/utils/helpers";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  BookingAccordion,
  TIMESLOTS,
  useBookingContext,
} from "../../../layout";
import Button from "@/components/ui/customButton";

const Page = ({ params }: { params: { _id: string } }) => {
  const {
    currentBooking: booking,
    date,
    changeDate,
    timeSlot,
    changeSlot,
  } = useBookingContext();
  const router = useRouter();

  console.log(booking, params);
  // console.log(combineDateAndTime(date, timeSlot.value));

  return (
    <div className="space-y-8 my-10">
      <button className="flex items-center gap-2" onClick={() => router.back()}>
        <ArrowLeft size={16} />{" "}
        <span className=" text-sm text-neutral-500">Back</span>
      </button>
      <div className="space-y-4 flex">
        <h1 className=" font-semibold capitalize text-2xl">{booking.name}</h1>
        <p className=" text-sm text-neutral-500">
          Check out our availability and book the date and time that works for
          you
        </p>
      </div>

      <div className="flex flex-col md:flex-row  gap-4">
        <div className="flex-[75%] space-y-4">
          <h2 className="text-lg font-medium pb-2 border-b-[1px]">
            Select Date and Time
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={changeDate}
              className="rounded-md border"
            />
            <div className="space-y-4 flex-1">
              <h3 className="text-center">{formatDateToHumanReadable(date)}</h3>
              <div className="grid grid-cols-3 gap-4 h-fit">
                {TIMESLOTS.map((slot) => (
                  <button
                    onClick={() => changeSlot(slot)}
                    className={`${
                      timeSlot.value === slot.value
                        ? "text-white bg-black"
                        : "text-slate-700"
                    } border-[1px] px-4 py-2 flex items-center justify-center h-fit`}
                    key={slot.label}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[25%] space-y-4">
          <BookingAccordion />
          <Button
            label="Next"
            intent="primary"
            onClick={() => router.push("form")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
