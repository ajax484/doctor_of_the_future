import React from "react";
import { DUMMY_PROGRAMS } from "../../page";
import Image from "next/image";
import Button from "@/components/ui/customButton";

async function getProgram(program_id: number) {
  return DUMMY_PROGRAMS.find((program) => program.id == program_id);
}

export default async function programInfo({
  params,
}: {
  params: { program_id: number };
}) {
  const { program_id } = params;
  const program = await getProgram(program_id);

  if (!program) {
    // Handle the case when the program is not found
    return <div>program not found</div>;
  }

  return (
    <section className="md:px-4 lg:px-8">
      <div className="p-4 md:p-8 lg:p-16 bg-limeGreen/50 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          {program.name} | <span className="uppercase">{program.gender}</span>
        </h2>
        <div className="flex gap-8">
          <div className="flex flex-col justify-between">
            <span className="block text-slate-800 text-lg">
              {program.duration}
            </span>
            <span className="block text-slate-600">Days</span>
          </div>
          <div className="h-16 w-[2px] bg-gray-400" />
          <div className="flex flex-col justify-between">
            <span className="block text-slate-800 text-lg">
              {program.steps}
            </span>
            <span className="block text-slate-600">Steps</span>
          </div>
        </div>
        <div className="space-y-2 text-slate-700">
          <p>Get a certificate by completing the program.</p>
          <p>
            Everyone who has completed all the steps will get a badge when the
            program ends.
          </p>
        </div>
      </div>
      <div className="w-full relative h-40 md:h-80 lg:h-96 mb-6 md:mb-12 lg:mb-24">
        <Image
          src={program.image}
          alt="name"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-[70%] px-4 md:px-8 lg:px-16 space-y-6 md:space-y-8 lg:space-y-12">
          <div className="space-y-2 md:space-y-4 lg:space-y-8">
            <h3 className="text-2xl">About</h3>
            <p className="text-slate-600">{program.description}</p>
          </div>
          <Button label="Join" intent="primary" />
        </div>
        <div className="bg-limeGreen/50 w-full md:min-h-[400px] flex-[30%]" />
      </div>
    </section>
  );
}
