import PlanCard from "@/components/ui/planCard";
import { planCardProps } from "@/types/products";
import React from "react";

const DUMMY_PLANS: planCardProps[] = [
  {
    id: 1,
    name: "Combo Plan Best Value)",
    price: 34699,
    description:
      "People battling metabolic issues, obesity, diabetes, fatty liver, weight loss etc.",
    benefits: [
      "Intermittent fasting",
      "supplementation",
      "exercise",
      "consultation and follow up",
      "meal plan",
      "2 of my books",
    ],
  },
  {
    id: 2,
    name: "Hormonal health plan",
    price: 33999,
    description:
      "For men and women battling social health issues, hormonal imbalances, PCOS, fibroid and TTC mums.",
    benefits: [
      "Intermittent fasting",
      "consultation and follow up",
      "stress management",
      "meal plan",
      "2 of my books",
    ],
  },
  {
    id: 3,
    name: "Gut Health Plan",
    price: 31200,
    description:
      "For people battling gut issues, ulcer, gastritis, sibo, leaky guts ansd hermorroids.",
    benefits: [
      "Stress management",
      "consultations and followups",
      "meal plan",
      "supplementation",
      "gut fix tips",
      "exercise",
      "2 of my books",
    ],
  },
  {
    id: 4,
    name: "Special Plan",
    price: 29800,
    description:
      "This is for people with single issues, hypertension, weight loss, arthritis, autoimmune issues, diabetes 1 and weight gain.",
    benefits: [
      "Stress management",
      "consultations and followups",
      "meal plan",
      "supplementation",
      "exercise",
      "2 of my books",
    ],
  },
];

export default function plans() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black text-center">Plans & Pricing</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-max">
        {DUMMY_PLANS.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
