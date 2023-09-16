/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

export default function Section8() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="space-y-4 py-8 md:py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl">You're in Safe Hands</h2>
        <ul className="flex flex-col text-start">
          <li className="md:leading-loose flex gap-x-3 items-center text-slate-900">
            <span>
              <IoCheckmark />
            </span>
            <span>Personalized Guidance to Meet Your Specific Needs</span>
          </li>
          <li className="md:leading-loose flex gap-x-3 items-center text-slate-900">
            <span>
              <IoCheckmark />
            </span>
            <span>Holistic Approach to Address Overall Well-Being</span>
          </li>
          <li className="md:leading-loose text-slate-900 flex items-center gap-x-3">
            <span>
              <IoCheckmark />
            </span>
            <span>Proven Success Stories from Satisfied Clients</span>
          </li>
          <li className="md:leading-loose text-slate-900 flex items-center gap-x-3">
            <span>Transparent and Ethical Practices</span>
          </li>
          <li className="md:leading-loose text-slate-900 flex items-center gap-x-3">
            <span>
              <IoCheckmark />
            </span>
            <span>Ongoing Support and Plan Adjustments</span>
          </li>
          <li className="md:leading-loose text-slate-900 flex items-center gap-x-3">
            <span>
              <IoCheckmark />
            </span>
            <span>Client-Centered Approach Tailored to You</span>
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
