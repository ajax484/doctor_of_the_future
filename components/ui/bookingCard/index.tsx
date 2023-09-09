"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { BookingProps } from "@/types/products";
import Button from "../customButton";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { shimmer, toBase64 } from "@/utils/shimmerimage";

interface BookingCardProps extends BookingProps {
  changeBooking: (booking: BookingProps) => void;
}

const BookingCard: React.FC<BookingCardsProps> = ({
  id,
  image,
  name,
  price,
  description,
  changeBooking,
}) => {
  const router = useRouter();

  const navigateToCalendar = () => {
    changeBooking({
      id,
      image,
      name,
      price,
      description,
    });
    router.push(`/bookings/${name.replaceAll(" ", "_")}/calendar`);
  };

  return (
    <div className="border-[1px] border-gray-200 h-full flex flex-col justify-between gap-4">
      <div>
        <div className="w-full h-[400px] relative">
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
          </div>

          <div className="bg-gray-600 w-10 h-[1px]" />

          <p>{description}</p>

          <h3 className="text-slate-800">{formatPriceToNaira(price)}</h3>
        </div>
      </div>

      <div className="p-4">
        <Button label="Book" intent="primary" onClick={navigateToCalendar} />
      </div>
    </div>
  );
};

export default BookingCard;
