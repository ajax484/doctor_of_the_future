"use client";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import Button from "@/components/ui/customButton";
import { useCart } from "@/context/CartContext";
import { UseInitializeTransaction } from "@/hooks/transactions";
import useAuthModal from "@/hooks/useAuthModal";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { generateReferenceNumber } from "@/utils/helpers";
import { useUser } from "@supabase/auth-helpers-react";
import { MinusCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// export const metadata: Metadata = {
//   title: "Cart | " + siteConfig.name,
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

const Page = () => {
  const { TransactionError, initializeTransaction, performingTransaction } =
    UseInitializeTransaction();
  const { cart, removeItem, hideCart } = useCart();
  const router = useRouter();
  const user = useUser();
  const authModal = useAuthModal();

  const [payMethod, setMethod] = useState<"paystack" | "flutterwave">(
    "paystack"
  );

  const total = cart.reduce((total, cartItem) => total + cartItem.price, 0);

  function checkout() {
    const email = user?.email;
    const amount = total;
    const books = cart.map((cartItem) => cartItem.id);
    const reference = generateReferenceNumber("SHP");

    // console.log(email, reference, books, amount);

    const payload = {
      email,
      amount,
      reference,
      metadata: { user_id: user?.id, books, email, payment_method: payMethod },
    };

    initializeTransaction({ payload, payMethod });
  }

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
        <div className="flex justify-between border-b-[1px] pb-4">
          <h3 className=" font-semibold">Subtotal:</h3>
          <span className=" font-semibold">{formatPriceToNaira(total)}</span>
        </div>

        {/* payment method */}
        <div className=" my-4">
          <h1 className=" capitalize font-semibold">select payment method</h1>

          <div className=" my-5">
            <RadioGroup
              onValueChange={(value: "paystack" | "flutterwave") =>
                setMethod(value)
              }
              defaultValue={payMethod}
              className="flex flex-col w-full"
            >
              {/* paystack */}
              <Label
                htmlFor="flutterwave"
                className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4 cursor-pointer"
              >
                <div className="flex items-center w-full gap-x-3 justify-between">
                  <span className="flex items-center gap-x-4">
                    <RadioGroupItem value="flutterwave" id="flutterwave" />
                    <span>Pay with Flutterwave</span>
                  </span>
                  <Image
                    alt="flutterwave logo"
                    src={
                      "https://i.ibb.co/rc66ZMq/paynow.png"
                    }
                    width={100}
                    height={100}
                    className="w-20 h-10"
                  />
                </div>
              </Label>
              {/* paystack */}
              <Label
                htmlFor="paystack"
                className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4 cursor-pointer"
              >
                <div className="flex items-center w-full gap-x-3 justify-between">
                  <span className="flex items-center gap-x-4">
                    <RadioGroupItem value="paystack" id="paystack" />
                    <span>Pay with PayStack</span>
                  </span>
                  <Image
                    alt="pay stack logo"
                    src={"https://cdn.worldvectorlogo.com/logos/paystack-2.svg"}
                    width={100}
                    height={100}
                    className="w-20 h-10"
                  />
                </div>
              </Label>
            </RadioGroup>
          </div>
        </div>

        {cart.length > 0 && (
          <Button
            label="Checkout"
            intent="primary"
            onClick={() => (user?.email ? checkout() : authModal.onOpen())}
            loading={performingTransaction}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
