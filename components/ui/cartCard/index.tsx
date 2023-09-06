import Image from "next/image";
import React from "react";
import Button from "../button";

interface ICartCard {
  name: string;
  image: string;
  price: number;
  id: number;
}

const CartCard: React.FC<ICartCard> = ({ name, id, image = "", price }) => {
  return (
    <div className="flex gap-2">
      <div className="relative h-20 w-full flex-[35%]">
        <Image
          src={image}
          alt="name"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex-[65%] flex flex-col justify-evenly">
        <h2 className="text-slate-700 font-bold text-md">{name}</h2>
        <h3 className="text-slate-700 text-sm">NGN{price}.00</h3>
      </div>
    </div>
  );
};

export default CartCard;
