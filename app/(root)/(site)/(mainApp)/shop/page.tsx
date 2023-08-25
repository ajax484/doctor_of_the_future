import ProductCard, { ProductCardProps } from "@/components/ui/productCard";
import React, { Fragment } from "react";

export const DUMMY_PRODUCTS: ProductCardProps[] = [
  {
    image: "/shop/shop1.jpg",
    name: "Workout Session",
    price: 200,
    week: 1,
    id: 1,
  },
  {
    image: "/shop/shop2.jpg",
    name: "Healthy Meal Plan",
    price: 150,
    week: 2,
    id: 2,
  },
  {
    image: "/shop/shop3.jpg",
    name: "Yoga Class",
    price: 180,
    week: 3,
    id: 3,
  },
  {
    image: "/shop/shop4.jpg",
    name: "Personal Training",
    price: 300,
    week: 4,
    id: 4,
  },
  {
    image: "/shop/shop5.jpg",
    name: "Mindfulness Workshop",
    price: 120,
    week: 1,
    id: 5,
  },
  {
    image: "/shop/shop6.jpg",
    name: "Nutrition Consultation",
    price: 250,
    week: 2,
    id: 6,
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
