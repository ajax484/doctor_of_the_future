"use client";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/ui/productCard";
import { useGetShop } from "@/hooks/shop";
import { ProductProps } from "@/types/products";
import React, { Fragment, Suspense } from "react";

const Page = () => {
  const { shop, fetchingShop } = useGetShop();

  // console.log(shop, fetchingShopError);

  return (
    <Suspense>
      <Loading loading={fetchingShop}>
        <div className=" my-5">
          <h1 className=" text-center text-3xl capitalize font-black">shop</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shop?.map((product: ProductProps) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Loading>
    </Suspense>
  );
};

export default Page;
