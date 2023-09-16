"use client";
import Image from "next/image";
import Button from "@/components/ui/customButton";
import { useCart } from "@/context/CartContext";
import { useGetItem } from "@/hooks/shop";
import Loading from "@/components/ui/Loading";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Item({ params }: { params: { _id: string } }) {
  const { _id } = params;
  const { item, fetchingItem, fetchingItemError } = useGetItem({ _id });

  console.log(item);

  const { isAdded, addItem, removeItem } = useCart();

  return (
    <Loading loading={fetchingItem}>
      <div className=" my-10">
        <h1 className=" text-center font-black text-3xl capitalize ">
          shop product details
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-40 md:h-80 lg:h-screen w-full relative">
          <Image
            src={item.image}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(200, 200)
            )}`}
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
            <h3 className="text-slate-600 text-lg">
              {formatPriceToNaira(item.price)}
            </h3>
          </div>
          <Button
            label={!isAdded(item.id) ? "Add To Cart" : "Remove From Cart"}
            type="button"
            intent="primary"
            onClick={() => {
              !isAdded(item.id) ? addItem(item) : removeItem(item.id);
            }}
          />
          <p className="text-slate-700 leading-8">{item.description}</p>
        </div>
      </div>
    </Loading>
  );
}
