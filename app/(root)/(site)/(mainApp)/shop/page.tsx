"use client";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/ui/productCard";
import { useGetShop } from "@/hooks/shop";
import { ProductProps } from "@/types/products";
import { Metadata } from "next";
import React, { Fragment, Suspense } from "react";

// export const metadata: Metadata = {
//   title: "Shop | " + siteConfig.name,
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

const Page = () => {
  const { shop, fetchingShop } = useGetShop();

  // console.log(shop, fetchingShopError);

  return (
    <div className="mb-20">
      <Suspense>
        <Loading loading={fetchingShop}>
          <div className=" my-10">
            <h1 className=" text-center text-3xl capitalize font-black">
              shop
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {shop?.map((product: ProductProps) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Loading>
      </Suspense>
    </div>
  );
};

export default Page;
