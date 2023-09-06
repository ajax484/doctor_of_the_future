"use client";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/ui/productCard";
import { useGetShop } from "@/hooks/shop";
import { ProductCardProps } from "@/types/products";
import React, { Fragment } from "react";

const Page = () => {
  const { shop, fetchingShop, fetchingShopError } = useGetShop();

  console.log(shop);

  return (
    <Loading loading={fetchingShop} error={!!fetchingShopError}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shop.map((product: ProductCardProps) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </Loading>
  );
};

export default Page;
