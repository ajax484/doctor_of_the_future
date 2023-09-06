import React from "react";
import Button from "../button";
import { PlanProps } from "@/types/products";
import { IoCaretForwardOutline } from "react-icons/io5";

const PlanCard: React.FC<PlanProps> = ({
  id,
  name,
  price,
  description,
  benefits,
}) => {
  return (
    <div className="py-4 px-2 border-[1px] border-gray-200 shadow-md text-center h-full flex flex-col justify-between gap-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-slate-900">{name}</h1>
        <div className="space-y-2 text-slate-600">
          <span>NGN</span>
          <h3 className="text-4xl">{price}.00</h3>
        </div>
        <p className="text-slate-700 text-sm">{description}</p>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex justify-start items-center gap-0.5">
              <IoCaretForwardOutline />
              <span className="first-letter:uppercase ">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button label="Select" intent="primary" />
    </div>
  );
};

export default PlanCard;
