import ProductCard from "@/components/ui/productCard";
import { ProductCardProps } from "@/types/products";
import React, { Fragment } from "react";

export const DUMMY_PRODUCTS: ProductCardProps[] = [
  {
    image: "/shop/shop1.jpg",
    name: "Organic Seasoning/Spices",
    price: 2700,
    id: 1,
    description:
      "Learn everything you need to know about organic spices and seasonings, from the basic foundations to more complex techniques. With our guide, you'll learn how to properly store and use spices in order to get the maximum flavor and aroma out of them. Our in-depth guide gives you step-by-step instructions on using various types of herbs and spices, as well as ideas for creating unique combinations that will take your dishes to the next level. Start adding amazing flavors to your recipes today with our comprehensive organic spice and seasoning training guide!",
  },
  {
    image: "/shop/shop2.jpeg",
    name: "keep it off for good",
    price: 3560,
    id: 2,
    description:
      "Keep it off for good is a concise and simple guide to preventing and reversing metabolic disease. With this guide, you will lose weight effortlessly, you will reverse high blood pressure, diabetes type 2, high blood cholesterol, fatty liver, insulin resistance among other range of metabolic issues.",
  },
  {
    image: "/shop/shop3.jpg",
    name: "the healthy nigeria meal guide",
    price: 1650,
    id: 3,
    description:
      "The healthy Nigerian diet guide seeks to expose up to 50+ healthy Nigerian meals you should eat to help protect you against chronic metabolic disease.",
  },
];


const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {DUMMY_PRODUCTS.map((product) => (
        <Fragment key={product.name}>
          <ProductCard {...product} />
        </Fragment>
      ))}
    </div>
  );
};

export default page;
