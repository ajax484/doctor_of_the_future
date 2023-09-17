import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <section className="bg-limeGreen p-2 py-5 md:p-12 text-white">
      <h2 className="mb-10 text-2xl md:text-4xl my-4 text-center w-full">
        Happy Clients
      </h2>
      <h3 className="mb-6 md:mb-8 font-semibold text-3xl md:text-5xl text-center w-full">
        See what they are saying
      </h3>
      {/* first */}
      <div className="flex my-5  flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-8">
        <div className="flex border-b border-slate-400 py-5 md:border-none md:py-0 flex-col items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-center leading-loose text-sm md:text-base">
            I follow Doctor of the future meal plan and lost alot of weight, no
            more low libido due to hormonal imbalance.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/clients/client1.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of client"
            />
          </div>
          <h4 className="text-xl text-center">Folasade olunlola</h4>
          <p className=" font-light text-gray-300 text-xs capitalize">
            Nigeria
          </p>
        </div>
        {/* second */}
        <div className="flex flex-col border-b border-slate-400 py-5 md:border-none md:py-0 items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-center leading-loose text-sm md:text-base">
            Thank you so much Doctor of the future for the amazing work you are
            doing in changing our eating habits.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/clients/cli2.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of client"
            />
          </div>
          <h4 className="text-xl text-center">Patou</h4>
          <p className=" font-light text-xs text-gray-300 capitalize">
            Cameroon
          </p>
        </div>

        {/* third */}
        <div className="flex py-5 md:py-0 flex-col items-center gap-4 px-4">
          <p className="md-8 md:mb-12 text-center  leading-loose text-sm md:text-base">
            Thank you so much Doctor of the future. I no longer have ulcer after
            following your advice and changing my eating habits.
          </p>
          <div className="w-20 md:w-40 h-20 md:h-40 rounded-full relative overflow-hidden">
            <Image
              src="/clients/cli3.jpg"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="image of client"
            />
          </div>
          <h4 className="text-xl text-center">Adeyemi</h4>
          <p className=" font-light text-xs text-gray-300 capitalize">
            Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
