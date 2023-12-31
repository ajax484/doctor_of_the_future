"use client";
import { siteConfig } from "@/app/(root)/siteConfig/page";
import Loading from "@/components/ui/Loading";
import ProgramCard from "@/components/ui/programCard";
import { useGetPrograms } from "@/hooks/programs";
import { ProgramProps } from "@/types/products";
import { Metadata } from "next";
import React, { Suspense } from "react";

// export const metadata: Metadata = {
//   title: "Programs | " + siteConfig.name,
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function Page() {
  const { programs, fetchingprograms, fetchingprogramsError } =
    useGetPrograms();

  return (
    <div className="space-y-8 mb-20">
      <div className=" my-10">
        <h1 className=" text-center text-3xl capitalize font-black">
          programs
        </h1>
      </div>
      <Suspense>
        <Loading loading={fetchingprograms}>
          <div className="grid md:grid-cols-2 gap-8 h-max">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </Loading>
      </Suspense>
    </div>
  );
}
