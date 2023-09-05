import React from "react";

export default function Bio() {
  return (
    <section className="py-16 md:py-32 px-8 flex flex-col md:flex-row gap-y-8">
      <div className="flex-[30%] md:pl-16">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium">BIO</h2>
      </div>
      <div className="flex-[60%] space-y-4 md:space-y-6">
        <h3 className="text-2xl">NUTRITION CONSULTING</h3>
        <p className="md:w-[80%] text-justify leading-relaxed text-slate-800">
          I am a certified nutritionist researcher and health advisor. I&apos;m
          here to lighten the load of poor health on your shoulders. I&apos;m
          here to help you lose weight and stay fit. I consult on obesity,
          diabetes, metabolic health, gut health and sexual health. I&apos;m
          here to constantly remind you that your health is your first wealth.
        </p>
      </div>
    </section>
  );
}
