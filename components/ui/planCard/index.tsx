import React from "react";
import Button from "../button";

export interface planCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  validity: number;
}

const PlanCard: React.FC<planCardProps> = ({
  id,
  name,
  price,
  description,
  validity,
}) => {
  return (
    <div className="py-8 px-4 border-[1px] border-gray-200 shadow-md space-y-4 text-center">
      <h1 className="text-xl font-bold text-slate-900">{name}</h1>
      <div className="space-y-2 text-slate-600">
        <span>NGN</span>
        <h3 className="text-4xl">{price}.00</h3>
      </div>
      <p className="text-slate-700 text-sm">{description}</p>
      <p className="text-slate-700">valid for {validity} month</p>
      <Button label="Select" intent="primary" />
    </div>
  );
};

export default PlanCard;
