import Image from "next/image";
import { DUMMY_PRODUCTS } from "../page";
import Button from "@/components/ui/button";

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

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="h-screen w-full relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="pt-4 pb-1 space-y-8">
        <div className="space-y-2">
          <h2 className="text-slate-900 capitalize text-2xl">{product.name}</h2>
          <h3 className="text-slate-600 text-lg">NGN {product.price}.00</h3>
        </div>
        <Button label="Add To Cart" type="button" intent="primary" />
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae at
          omnis recusandae id, ratione magnam amet exercitationem. Explicabo
          alias, non ipsum, sunt quos ratione aliquam veritatis dolor inventore
          ullam cumque?
        </p>
      </div>
    </div>
  );
}
