import Image from "next/image";
import React from "react";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="h-screen relative max-w-screen overflow-hidden">
      <div className="bg-black opacity-25 absolute inset-0 h-screen w-screen z-10 !overflow-hidden" />
      <Image
        src="/home/soup.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="image of soup"
      />
      <div className="absolute bottom-1/2 md:bottom-4 -translate-x-1/2 -translate-y-1/2 left-1/2 z-20 w-[95vw] md:w-[25vw] space-y-6">
        <h2 className="text-white text-3xl md:text-5xl font-black text-center leading-relaxed tracking-wider">Doctor of the Future</h2>
        <Button label="Get in Touch" intent="transparent" />
      </div>
    </section>
  );
}
