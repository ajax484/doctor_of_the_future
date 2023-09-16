"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Button from "@/components/ui/customButton";
import { shimmer, toBase64 } from "@/utils/shimmerimage";
import ProgramsDetails from "@/components/ui/programs/ProgramsDetails";
import { useGetProgram } from "@/hooks/programs";
import Loading from "@/components/ui/Loading";
import { Metadata } from "next";
import { siteConfig } from "@/app/(root)/siteConfig/page";



export const metadata: Metadata = {
  title: "Programs Info | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};





export default function ProgramInfo({
  params,
}: {
  params: { program_id: string };
}) {
  const { program_id } = params;
  const { program, fetchingProgram, fetchingProgramError } = useGetProgram({
    _id: program_id,
  });

  return (
    <Suspense>
      <Loading loading={fetchingProgram}>
        <section className="md:px-4 lg:px-8">
          <div className=" my-10">
            <h1 className=" text-center text-3xl capitalize font-black">
              program Details
            </h1>
          </div>

          <div className="p-4 md:p-8 lg:p-16 bg-limeGreen/50 space-y-6">
            <h2 className=" text-2xl lg:text-4xl font-bold text-slate-800">
              {program.name} |{" "}
              <span className="uppercase">{program.gender}</span>
            </h2>
            <div className="flex items-start gap-8">
              <div className="">
                <span className="block capitalize font-semibold text-xl text-slate-800">
                  {program.duration}
                </span>
              </div>
            </div>
            <div className="space-y-2 text-slate-800">
              <p className=" text-slate-800">
                Get a certificate by completing the program.
              </p>
              <p className=" text-slate-800">
                Everyone who has completed all the steps will get a badge when
                the program ends.
              </p>
            </div>
          </div>
          <div className="w-full relative h-40 md:h-80 lg:h-96 mb-2 md:mb-6 lg:mb-12">
            <Image
              src={program.image}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
              alt="name"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="flex flex-col w-full md:flex-row gap-x-5 gap-y-8">
            <ProgramsDetails program={program} />

            <div className="bg-limeGreen/50 w-full md:min-h-[400px]">
              <Image
                src={program.image}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(200, 200)
                )}`}
                alt="image"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </Loading>
    </Suspense>
  );
}
