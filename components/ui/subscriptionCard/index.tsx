import React from "react";
import Button from "@/components/ui/customButton";
import { SubscriptionProps } from "@/types/products";
import { IoCaretForwardOutline } from "react-icons/io5";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { useRouter } from "next/navigation";

const SubscriptionCard: React.FC<SubscriptionProps> = ({ id, duration, price }) => {
  const router = useRouter();

  return (
    <div className="py-4 px-2 border-[1px] border-gray-200 shadow-md text-center h-full flex flex-col justify-between gap-4 my-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-slate-900">{duration}</h1>
        <div className="space-y-2 text-slate-600">
          <h3 className="text-4xl text-green-600">
            {formatPriceToNaira(price)}
          </h3>
        </div>
      </div>
      <Button
        label="Select"
        intent="primary"
        onClick={() => router.push(`/blog/subscribe/checkout/${id}`)}
      />
    </div>
  );
};

export default SubscriptionCard;
