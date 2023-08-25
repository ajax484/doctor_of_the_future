import ProgramCard, { ProgramCardProps } from "@/components/ui/programCard";
import React from "react";

export const DUMMY_PROGRAMS: ProgramCardProps[] = [
  {
    image: "/shop/shop1.jpg",
    name: "Morning Ritual",
    price: 200,
    duration: 1,
    id: 1,
    gender: "men",
    steps: 210,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas repellat enim voluptatum pariatur a nostrum officiis beatae labore facilis ad praesentium ipsa, alias numquam quisquam quo, necessitatibus culpa. Ipsa, libero!",
  },
  {
    image: "/shop/shop2.jpg",
    name: "Morning Ritual",
    price: 150,
    duration: 2,
    id: 2,
    gender: "women",
    steps: 205,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas repellat enim voluptatum pariatur a nostrum officiis beatae labore facilis ad praesentium ipsa, alias numquam quisquam quo, necessitatibus culpa. Ipsa, libero!",
  },
];

export default function page() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black text-center">Programs</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {DUMMY_PROGRAMS.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>
    </div>
  );
}
