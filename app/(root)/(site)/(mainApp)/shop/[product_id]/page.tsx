import Image from "next/image";
import { DUMMY_PRODUCTS } from "../page";
import InnerProduct from "./InnerProduct";

type ProductProps = {
  params: { product_id: number };
};

async function getProduct(product_id: number) {
  return DUMMY_PRODUCTS.find((product) => product.id == product_id);
}

export default async function Product({
  params,
}: {
  params: { product_id: number };
}) {
  const { product_id } = params;
  const product = await getProduct(product_id);

  if (!product) {
    // Handle the case when the product is not found
    return <div>Product not found</div>;
  }

  return <InnerProduct product={product} />

}
