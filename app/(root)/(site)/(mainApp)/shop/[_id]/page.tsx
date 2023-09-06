"use client"
import Image from "next/image";
import Button from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useGetItem } from "@/hooks/shop";
import Loading from "@/components/ui/Loading";

export default function Item({ params }: { params: { _id: string } }) {
  const { _id } = params;
  const { item, fetchingItem, fetchingItemError } = useGetItem({ _id });

  console.log(item);

  const { isAdded, addItem, removeItem, resetCart } = useCart();

  return (
    <Loading loading={fetchingItem} error={!!fetchingItemError}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-40 md:h-80 lg:h-screen w-full relative">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="md:pt-12 pb-1 space-y-8">
          <div className="space-y-2">
            <h2 className="text-slate-900 capitalize text-2xl font-bold">
              {item.name}
            </h2>
            <h3 className="text-slate-600 text-lg">NGN {item.price}.00</h3>
          </div>
          <Button
            label={!isAdded(item.id) ? "Add To Cart" : "Remove From Cart"}
            type="button"
            intent="primary"
            onClick={() =>
              !isAdded(item.id) ? addItem(item) : removeItem(item.id)
            }
          />
          <p className="text-slate-700">{item.description}</p>
        </div>
      </div>
    </Loading>
  );
}
