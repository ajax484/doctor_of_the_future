"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/customButton";
import { useRouter } from "next/navigation";
import { ProgramProps } from "@/types/products";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { shimmer, toBase64 } from "@/utils/shimmerimage";

const ProgramCard: React.FC<ProgramProps> = ({
  duration,
  id,
  image,
  name,
  price,
  description,
}) => {
  const router = useRouter();
  return (
    <div className="border-[1px] border-gray-200 h-full flex flex-col justify-between gap-4 hover:cursor-pointer hover:bg-gray-200 transition duration-200">
      <div>
        <div className="w-full h-80 relative">
          <Image
            src={image}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(200, 200)
            )}`}
            alt="name"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl font-bold capitalize">{name}</h2>
            <h4 className="text-slate-700 capitalize">{duration}</h4>
          </div>

          <div className="bg-gray-600 w-10 h-[1px]" />

          <p className="">{description}</p>

          <h3 className="text-slate-800">{formatPriceToNaira(price)}</h3>
        </div>
      </div>

      <div className="p-4">
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
