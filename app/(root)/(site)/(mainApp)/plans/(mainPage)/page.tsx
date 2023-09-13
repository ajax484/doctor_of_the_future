"use client";
import Loading from "@/components/ui/Loading";
import PlanCard from "@/components/ui/planCard";
import { useGetPlans } from "@/hooks/plans";
import React, { Suspense } from "react";

export default function Page() {
  const { plans, fetchingPlans, fetchingPlansError } = useGetPlans();
  console.log(plans);

  return (
   <Suspense>
     <Loading loading={fetchingPlans} >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-max">
        {plans?.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </Loading>
   </Suspense>
  );
}
