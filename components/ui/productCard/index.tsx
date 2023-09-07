"use client";
import { ProductProps } from "@/types/products";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ProductCard: React.FC<ProductProps> = ({
  image,
  name,
  price,  
  id,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [showBtn, setShowBtn] = useState<boolean>(
    window.innerWidth > 768 ? false : true
  );

  useEffect(() => {
    const card = cardRef.current;

    if (card && window.innerWidth > 768) {
      card.addEventListener("mouseenter", () => {
        // Your event handler logic here
        setShowBtn(true);
      });

      card.addEventListener("mouseleave", () => {
        // Your event handler logic here
        setShowBtn(false);
      });
    }

    return () => {
      if (card && window.innerWidth > 768) {
        card.removeEventListener("mouseenter", () => {
          // Your event handler logic here
        });

        card.removeEventListener("mouseleave", () => {
          // Your event handler logic here
        });
      }
    };
  }, []);

  return (
    <div ref={cardRef}>
      <Link href={`/shop/${id}`}>
        <div className="h-72 w-full relative overflow-hidden">
          {/* <div className="px-4 py-0.5 bg-limeGreen absolute top-0 left-0 z-10 text-white text-sm">
            WEEK {week}
          </div> */}
          <Image
            src={image}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(200, 200)
            )}`}
            alt="name"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <button
            className={`${
              showBtn ? "bottom-0" : "-bottom-24"
            } w-full absolute py-1.5 px-2 bg-white/60 z-10 left-0 transition-all duration-300`}
          >
            <Link
              href={{
                pathname: "/shop/2",
              }}
            >
              View More
            </Link>
          </button>
        </div>
        <div className="pt-4 pb-1">
          <h2 className="text-slate-900 text-lg capitalize line-clamp-1">{name}</h2>
          <h3 className="text-slate-600 pt-2">{formatPriceToNaira(price)}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
