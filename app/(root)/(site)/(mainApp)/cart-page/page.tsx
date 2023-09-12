"use client";
import Button from "@/components/ui/customButton";
import { useCart } from "@/context/CartContext";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { MinusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { cart, removeItem, hideCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((total, cartItem) => total + cartItem.price, 0);

  return (
    <div className="mt-12 flex gap-6">
      <div className="flex-[75%]">
        <h1 className="border-b-[1px] pb-4">My Cart</h1>
        <div className="space-y-4 pb-4">
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex gap-2 mt-6 border-b py-3 items-center"
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
              <h2 className="text-slate-700 font-bold text-base capitalize flex-[50%] text-center">
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
        <h2 className="border-b-[1px] pb-4">Order Summary</h2>
        <div className="flex justify-between">
          <h3>Subtotal:</h3>
          <span>{formatPriceToNaira(total)}</span>
        </div>
        {cart.length > 0 && (
          <Button
            label="Checkout"
            intent="primary"
            onClick={() => {
              router.push("/cart-page");
              hideCart();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
