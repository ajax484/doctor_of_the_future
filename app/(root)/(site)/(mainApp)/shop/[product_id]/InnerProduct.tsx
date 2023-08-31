"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const InnerProduct = ({ product }: { product: any }) => {
  const { isAdded, addItem, removeItem } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-40 md:h-80 lg:h-screen w-full relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="pt-4 pb-1 space-y-8">
        <div className="space-y-2">
          <h2 className="text-slate-900 capitalize text-2xl">{product.name}</h2>
          <h3 className="text-slate-600 text-lg">NGN {product.price}.00</h3>
        </div>
        <Button
          label={!isAdded(product.id) ? "Add To Cart" : "Remove From Cart"}
          type="button"
          intent="primary"
          onClick={
            () => !isAdded(product.id) ? addItem(product) : removeItem(product)
          }
        />
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae at
          omnis recusandae id, ratione magnam amet exercitationem. Explicabo
          alias, non ipsum, sunt quos ratione aliquam veritatis dolor inventore
          ullam cumque?
        </p>
      </div>
    </div>
  );
};

export default InnerProduct;
