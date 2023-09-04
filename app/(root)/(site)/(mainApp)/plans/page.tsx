import PlanCard, { planCardProps } from "@/components/ui/planCard";
import React from "react";

const DUMMY_PLANS: planCardProps[] = [
  {
    id: 1,
    name: "Combo Plan",
    price: 2000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam impedit excepturi optio ipsam minima error quam mollitia. Quibusdam a eligendi provident nemo corporis facere asperiores nobis nostrum et dolorem.",
    validity: 2,
  },
  {
    id: 2,
    name: "Big Plan",
    price: 5000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam impedit excepturi optio ipsam minima error quam mollitia. Quibusdam a eligendi provident nemo corporis facere asperiores nobis nostrum et dolorem.",
    validity: 2,
  },
  {
    id: 3,
    name: "Medium Plan",
    price: 5000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam impedit excepturi optio ipsam minima error quam mollitia. Quibusdam a eligendi provident nemo corporis facere asperiores nobis nostrum et dolorem.",
    validity: 3,
  },
  {
    id: 4,
    name: "Small Plan",
    price: 1500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam impedit excepturi optio ipsam minima error quam mollitia. Quibusdam a eligendi provident nemo corporis facere asperiores nobis nostrum et dolorem.",
    validity: 0,
  },
];

export default function plans() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black text-center">Plans & Pricing</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DUMMY_PLANS.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
