"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import Button from "@/components/ui/customButton";
import { combineDateAndTime, formatDateToHumanReadable } from "@/utils/helpers";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoVideocam } from "react-icons/io5";

type TTimeSlot = {
  label: string;
  value: string;
};

const TIMESLOTS: TTimeSlot[] = [
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
const Page = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = React.useState<TTimeSlot>({
    label: "9:00 AM",
    value: "09:00:00",
  });

  console.log(combineDateAndTime(date, timeSlot.value));

  return (
    <div className="space-y-8">
      <button className="flex gap-2" onClick={() => router.back()}>
        <ArrowLeft /> <span>Back</span>
      </button>
      <div className="space-y-4">
        <h1>General medical consulting</h1>
        <p>
          Check out our availability and book the date and time that works for
          you
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex-[75%] space-y-4">
          <h2 className="text-lg font-medium pb-2 border-b-[1px]">
            Select Date and Time
          </h2>
          <div className="flex gap-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="space-y-4 flex-1">
              <h3 className="text-center">{formatDateToHumanReadable(date)}</h3>
              <div className="grid grid-cols-3 gap-4 h-fit">
                {TIMESLOTS.map((timeslot) => (
                  <button
                    onClick={() => setTimeSlot(timeslot)}
                    className={`${
                      timeSlot.value === timeslot.value
                        ? "text-white bg-black"
                        : "text-slate-700"
                    } border-[1px] px-4 py-2 flex items-center justify-center h-fit`}
                    key={timeslot.label}
                  >
                    {timeslot.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[25%] space-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                Service Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="border-[1px] px-1 py-2 rounded-xl flex gap-2 items-center w-fit">
                    <IoVideocam />{" "}
                    <span className="text-sm">Available Online</span>
                  </div>
                  <div>
                    <h4 className="text-base text-slate-900">
                      General Medical Consultation
                    </h4>
                    <h5 className="text-base text-slate-900">
                      {formatDateToHumanReadable(date)} At {timeSlot.label}
                    </h5>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">
                      {session?.user.email}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button label="Next" intent="primary" />
        </div>
      </div>
    </div>
  );
};

export default Page;
