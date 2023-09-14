"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../button";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";

const ProgramsDetails = ({ program }: any) => {
  return (
    <div className="px-4 w-full md:px-8 lg:px-16 space-y-6 md:space-y-8 lg:space-y-12">
      <div className="space-y-2 md:space-y-4 lg:space-y-8">
        <h3 className="text-2xl font-semibold">About</h3>
        <p className="text-slate-700 caption-top capitalize">
          {program.description}
        </p>
      </div>
      {/* pricing */}
      <div className=" py-5 border-t border-b">
        <h1 className=" capitalize font-semibold text-2xl">price</h1>
        {/* price logic here */}
        <div className="my-5">
           <div className=" flex items-center justify-between cursor-pointer transition bg-slate-200 hover:bg-slate-400 ease-in-out duration-300 border p-4">
           <span className=" font-semibold capitalize">Single Payment</span>
            <span className=" font-semibold">{formatPriceToNaira(program.price)}</span>
           </div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger className=" w-full">
          <Button className=" w-full hover:bg-slate-700 text-center">
            Join now
          </Button>
        </DialogTrigger>
        <DialogContent className=" h-[200px]">
          <DialogHeader>
            <DialogTitle className=" text-center mb-5">hey there!</DialogTitle>
            <DialogDescription className=" uppercase my-4 text-4xl font-semibold text-center">
              COMING SOON
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgramsDetails;
