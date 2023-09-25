"use client";
import Loading from "@/components/ui/Loading";
import PlanCard from "@/components/ui/planCard";
import { useGetPlans } from "@/hooks/plans";
import React, { Suspense } from "react";

export default function Page() {
  const { plans, fetchingPlans, fetchingPlansError } = useGetPlans();
  // console.log(plans);

  return (
   <Suspense>
     <Loading loading={fetchingPlans} >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 h-max">
        {plans?.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </Loading>
   </Suspense>
  );
}
