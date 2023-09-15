/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";

export default function Section8() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="space-y-4 py-8 md:py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl">You're in Safe Hands</h2>
        <ul className="flex flex-col text-start">
          <li className="md:leading-loose text-slate-900">
            Personalized Guidance to Meet Your Specific Needs
          </li>
          <li className="md:leading-loose text-slate-900">
            Holistic Approach to Address Overall Well-Being
          </li>
          <li className="md:leading-loose text-slate-900">
            Proven Success Stories from Satisfied Clients
          </li>
          <li className="md:leading-loose text-slate-900">
            Transparent and Ethical Practices
          </li>
          <li className="md:leading-loose text-slate-900">
            Ongoing Support and Plan Adjustments
          </li>
          <li className="md:leading-loose text-slate-900">
            Client-Centered Approach Tailored to You
          </li>
        </ul>
      </div>
      <div className="h-48 md:h-screen w-screen md:w-full relative">
        <Image
          src="/homepage/image21.jpg"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          alt="image of soup 2"
        />
      </div>
    </section>
  );
}
