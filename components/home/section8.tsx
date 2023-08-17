/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";

export default function Section8() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="space-y-4 py-8 md:py-12 px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl">You're in Safe Hands</h2>
        <p className="md:leading-loose text-slate-900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          iure velit porro rerum dolores sunt, est nulla expedita corporis
          ipsam beatae voluptas nemo omnis optio vero incidunt id animi unde?
        </p>
      </div>
      <div className="h-48 md:h-screen w-screen md:w-full relative">
        <Image
          src="/home/food1.jpg"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          alt="image of soup 2"
        />
      </div>
    </section>
  );
}
