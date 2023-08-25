"use client";
import Image from "next/image";
import React from "react";
import Button from "../button";
import { useRouter } from "next/navigation";

export interface ProgramCardProps {
  image: string;
  name: string;
  id: number;
  price: number;
  duration: number;
  gender: "men" | "women";
  steps: number;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  duration,
  gender,
  id,
  image,
  name,
  price,
}) => {
  const router = useRouter();
  return (
    <div className="border-[1px] border-gray-200">
      <div className="w-full h-80 relative">
        <Image
          src={image}
          alt="name"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-8 space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">
            {name} | <span className="uppercase">{gender}</span>
          </h2>
          <h4 className="text-slate-700">{duration} days</h4>
        </div>

        <div className="bg-gray-600 w-10 h-[1px]" />

        <h3 className="text-slate-800">NGN{price}</h3>

        <Button
          label="Join"
          intent="primary"
          onClick={() => router.push(`/programs/info/${id}`)}
        />
      </div>
    </div>
  );
};

export default ProgramCard;
