import React from "react";
import Button from "@/components/ui/customButton";
import { PlanProps } from "@/types/products";
import { IoCaretForwardOutline } from "react-icons/io5";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { useRouter } from "next/navigation";

const PlanCard: React.FC<PlanProps> = ({
  id,
  name,
  price,
  description,
  benefits,
  bg_colors,
  tag,
}) => {
  const router = useRouter();

  return (
    <div
      className={`py-4 px-2 border-[1px] border-gray-200 shadow-md text-center h-full flex flex-col justify-between gap-4 my-4 relative`}
    >
      {/* {tag && (
         <div className="absolute bg-red-600 p-1 w-60  md:w-44 h-10 left-16 md:left-20 lg:w-32 lg:left-16 -top-6 md:-top-8 flex items-center justify-center z-20">
         <span className="text-white capitalize font-semibold">
           {tag}
         </span>
       </div>
      )} */}
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-slate-900">{name}</h1>
        <div className="space-y-2 text-slate-500">
          <h3 className="text-4xl  text-green-700">
            {formatPriceToNaira(price)}
          </h3>
        </div>
        <p className="text-slate-600 text-sm md:text-xs text-center">
          {description}
        </p>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex justify-start items-center gap-0.5"
            >
              <IoCaretForwardOutline className=" text-black" />
              <span className="first-letter:uppercase text-black">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        label="Select"
        intent="primary"
        onClick={() => router.push(`/plans/checkout/${id}`)}
      />
    </div>
  );
};

export default PlanCard;
