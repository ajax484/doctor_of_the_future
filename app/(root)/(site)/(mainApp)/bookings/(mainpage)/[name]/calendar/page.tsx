"use client";
import { Calendar } from "@/components/ui/calendar";
import { combineDateAndTime, formatDateToHumanReadable } from "@/utils/helpers";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  BookingAccordion,
  TIMESLOTS,
  TTimeSlot,
  useBookingContext,
} from "../../../layout";
import Button from "@/components/ui/customButton";
import Loading from "@/components/ui/Loading";
import { useGetUsersBookings } from "@/hooks/bookings";

const Page = ({ params }: { params: { _id: string } }) => {
  const {
    currentBooking: booking,
    date,
    changeDate,
    timeSlot,
    changeSlot,
  } = useBookingContext();
  const { usersBookings, fetchingUsersBookings, fetchingUsersBookingsError } =
    useGetUsersBookings();
  const router = useRouter();
  const [availableTimeSlots, setAvailableSlots] =
    useState<TTimeSlot[]>(TIMESLOTS);

  useEffect(() => {
    if (fetchingUsersBookings) return;

    const newAvailableTimeSlots = TIMESLOTS.filter((slot) => {
      const timeSlotDate = new Date(
        combineDateAndTime(date, slot.value)
      ).toISOString();
      // console.log(timeSlotDate, usersBookings);
      // console.log(usersBookings?.includes(timeSlotDate));
      return !usersBookings?.includes(timeSlotDate);
    });
    setAvailableSlots(newAvailableTimeSlots);
  }, [date, usersBookings]);

  // console.log(usersBookings);

  // console.log(booking, params);
  // console.log(combineDateAndTime(date, timeSlot.value));

  return (
    <div className="space-y-8 my-10">
      <button className="flex items-center gap-2" onClick={() => router.back()}>
        <ArrowLeft size={16} />{" "}
        <span className=" text-sm text-neutral-500">Back</span>
      </button>
      <div className="flex flex-col gap-y-2 items-center gap-x-4">
        <h1 className=" font-semibold text-start md:text-center capitalize text-2xl md:text-3xl">
          {booking.name}
        </h1>
        <p className=" text-sm text-start md:text-center  text-neutral-500">
          Check out our availability and book the date and time that works for
          you
        </p>
      </div>

      <div className="flex flex-col lg:flex-row  gap-4">
        <Loading
          loading={fetchingUsersBookings}
          error={!!fetchingUsersBookingsError}
        >
          <div className="flex-[75%] space-y-4">
            <h2 className="text-lg font-semibold pb-2 border-b-[1px]">
              Select Date and Time
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={changeDate}
                minDate={new Date()}
                className="rounded-md border"
              />
              <div className="space-y-4 flex-1">
                <h3 className="text-center">
                  {formatDateToHumanReadable(date)}
                </h3>
                <div className="grid grid-cols-3 gap-4 h-fit">
                  {availableTimeSlots.map((slot) => (
                    <button
                      onClick={() => changeSlot(slot)}
                      className={`${
                        timeSlot.value === slot.value
                          ? "text-white bg-black"
                          : "text-slate-700"
                      } border-[1px] px-4 py-2 text-xs md:text-base flex items-center justify-center h-fit`}
                      key={slot.label}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Loading>
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
