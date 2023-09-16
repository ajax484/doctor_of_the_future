"use client";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import Button from "@/components/ui/customButton";
import { useCart } from "@/context/CartContext";
import useAuthModal from "@/hooks/useAuthModal";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { useUser } from "@supabase/auth-helpers-react";
import { MinusCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Cart | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  const { cart, removeItem, hideCart } = useCart();
  const router = useRouter();
  const user = useUser()
  const authModal = useAuthModal()

  const total = cart.reduce((total, cartItem) => total + cartItem.price, 0);

  return (
    <div className="mt-12 flex flex-col md:flex-row gap-x-8 gap-y-12">
      <div className="flex-[75%]">
        <h1 className="border-b-[1px] font-black pb-4">My Cart</h1>
        <div className="space-y-4 pb-4">
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex gap-x-3 mt-6 border-b p-3 md:p-4 items-center"
            >
              <div className="relative h-20 flex-[20%] p-4">
                <Image
                  src={cartItem.image}
                  alt={cartItem.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h2 className="text-slate-700 font-bold text-sm md:text-base line-clamp-2 capitalize flex-[50%] text-center">
                {cartItem.name}
              </h2>
              <h3 className="text-slate-700 text-sm flex-[30%]">
                {formatPriceToNaira(cartItem.price)}
              </h3>
              <div>
                <button
                  onClick={() => removeItem(cartItem.id)}
                  className="self-start"
                >
                  <MinusCircle className="ml-auto text-black text-2xl hover:font-light" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-[25%] space-y-4">
        <h2 className="border-b-[1px] font-semibold pb-4">Order Summary</h2>
        <div className="flex justify-between">
          <h3 className=" font-semibold">Subtotal:</h3>
          <span>{formatPriceToNaira(total)}</span>
        </div>
        {cart.length > 0 && (
          <Button
            label="Checkout"
            intent="primary"
            onClick={() =>
              user?.email ? "" : authModal.onOpen()
            }
          />
        )}
      </div>
    </div>
  );
};

export default Page;
