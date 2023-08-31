"use client";
import { useCart } from "@/context/CartContext";
import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "../button";
import CartCard from "../cartCard";

export default function CartScreen() {
  const { cart, cartVisible, hideCart, showCart, resetCart } = useCart();
  console.log(cart);

  return (
    <div
      className={`fixed h-screen bg-black/50 w-screen inset-0 flex z-[1000] ${
        cartVisible ? "" : "hidden"
      }`}
    >
      <div className="h-full bg-white w-full md:w-1/2 lg:w-1/3 ml-auto pt-8 pb-4 flex flex-col px-4">
        <button onClick={hideCart}>
          <IoClose className="ml-auto text-black text-2xl hover:font-light" />
        </button>
        <div className="flex-[80%] py-4 flex flex-col gap-8">
          {cart.length > 0 ? (
            cart.map((cartItem) => (
              <CartCard
                key={cartItem.name}
                name={cartItem.name}
                price={cartItem.price}
                image={cartItem.image}
                id={cartItem.id}
              />
            ))
          ) : (
            <>No Products Found</>
          )}
        </div>
        <Button label="Checkout" intent="primary" />
      </div>
    </div>
  );
}