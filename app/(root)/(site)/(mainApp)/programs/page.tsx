import ProgramCard from "@/components/ui/programCard";
import { ProgramProps } from "@/types/products";
import React from "react";

export const DUMMY_PROGRAMS: ProgramProps[] = [
  {
    image: "/shop/shop1.jpg",
    name: "Knightup Challenge 2.0",
    price: 11360,
    duration: "a 3 day bootcamp",
    id: 1,
    description:
      "for people interested in losing weight and optimising their metabolic health.",
  },
  {
    image: "/shop/shop2.jpg",
    name: "sexual health and fertility bootcamp 2.0",
    price: 6000,
    duration: "a 3 day bootcamp",
    id: 2,
    description:
      "for people interested in  taking their skills to the next level, get their sexual groove back as well as take care of ejaculation, erection and fertility issues.",
  },
];

export default function page() {
  return (
    <div className="space-y-8">
      <div className=" my-5">
        <h1 className=" text-center text-3xl capitalize font-black">
          programs
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 h-max">
        {DUMMY_PROGRAMS.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>
    </div>
  );
}
