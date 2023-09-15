"use client"
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/customButton";
import { useRouter } from "next/navigation";

export default function Hero() {

  const router = useRouter()

  const onClick = () => {
    router.push('/plans')
  }


  return (
    <section className="h-screen relative max-w-screen overflow-hidden">
      <div className="bg-black opacity-25 absolute inset-0 h-screen w-screen z-10 !overflow-hidden" />
      <Image
        src={'https://images.pexels.com/photos/793750/pexels-photo-793750.jpeg?auto=compress&cs=tinysrgb&w=800'}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
        alt="image of healthy meal"
      />
      <div className="absolute bottom-1/3 lg:bottom-1/4 -translate-x-1/2 -translate-y-1/2 left-1/2 z-20 w-[95vw] lg:w-[45vw] space-y-6">
        <h2 className="text-white capitalize text-4xl md:text-7xl font-black text-center leading-relaxed tracking-wider">Doctor of the Future</h2>
        <Button onClick={onClick}  label="Get in Touch" intent="transparent" />
      </div>
    </section>
  );
}
