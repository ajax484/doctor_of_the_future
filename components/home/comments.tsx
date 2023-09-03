import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <section className="bg-limeGreen p-2 py-5 md:p-12 text-white">
      <h2 className="mb-4 text-2xl md:text-4xl my-4 text-center w-full">
        Happy Clients
      </h2>
      <h3 className="mb-6 md:mb-8 font-semibold text-3xl md:text-5xl text-center w-full">
        See what they are saying
      </h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-justify leading-loose text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nihil assumenda quia illum ipsa commodi.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/home/soup2.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of soup 2"
            />
          </div>
          <h4 className="text-xl text-center">Lagbaja Omo Lagbaja</h4>
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-justify leading-loose text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nihil assumenda quia illum ipsa commodi.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/home/soup2.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of soup 2"
            />
          </div>
          <h4 className="text-xl text-center">Lagbaja Omo Lagbaja</h4>
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-justify leading-loose text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nihil assumenda quia illum ipsa commodi.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/home/soup2.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of soup 2"
            />
          </div>
          <h4 className="text-xl text-center">Lagbaja Omo Lagbaja</h4>
        </div>
      </div>
    </section>
  );
}
