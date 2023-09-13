import Image from "next/image";
import React from "react";
import Button from "@/components/ui/customButton";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { MinusCircle } from "lucide-react";

interface ICartCard {
  name: string;
  image: string;
  price: number;
  id: string;
}

const CartCard: React.FC<ICartCard> = ({ name, id, image = "", price }) => {
  const { removeItem } = useCart();
  return (
    <div className="flex gap-2 mt-6 border-b p-3">
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
        <h2 className="text-slate-700 font-bold text-base capitalize">
          {name}
        </h2>
        <h3 className="text-slate-700 text-sm">{formatPriceToNaira(price)}</h3>
      </div>
      <button onClick={() => removeItem(id)} className="self-start">
        <MinusCircle className="ml-auto text-black text-2xl hover:font-light" />
      </button>
    </div>
  );
};

export default CartCard;
