"use client";
import Loading from "@/components/ui/Loading";
import SubscriptionCard from "@/components/ui/subscriptionCard";
import { useGetSubscriptions } from "@/hooks/subscriptions";
import { SubscriptionProps } from "@/types/products";
import React, { Suspense } from "react";

export default function Page() {
  const { subscriptions, fetchingSubscriptions, fetchingSubscriptionsError } =
    useGetSubscriptions();
  // console.log(subscriptions);

  return (
    <Suspense>
      <div className=" my-10">
        <h1 className=" font-semibold text-start md:text-center capitalize text-2xl md:text-3xl">
          Select a subscription plan
        </h1>
      </div>
      <Loading loading={fetchingSubscriptions}>
        <div className="grid lg:grid-cols-3 gap-4 h-max mt-12">
          {subscriptions?.map((subscription: SubscriptionProps) => (
            <SubscriptionCard key={subscription.id} {...subscription} />
          ))}
        </div>
      </Loading>
    </Suspense>
  );
}
