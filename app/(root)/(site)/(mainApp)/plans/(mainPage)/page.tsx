"use client";
import Loading from "@/components/ui/Loading";
import PlanCard from "@/components/ui/planCard";
import { useGetPlans } from "@/hooks/plans";
import React from "react";

export default function Page() {
  const { plans, fetchingPlans, fetchingPlansError } = useGetPlans();
  console.log(plans);

  return (
    <Loading loading={fetchingPlans} error={!!fetchingPlansError}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-max">
        {plans?.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </Loading>
  );
}
