"use client";
import Loading from "@/components/ui/Loading";
import SubscriptionCard from "@/components/ui/subscriptionCard";
import { useGetSubscriptions } from "@/hooks/subscriptions";
import { SubscriptionProps } from "@/types/products";
import React, { Suspense } from "react";

export default function Page() {
  const { subscriptions, fetchingSubscriptions, fetchingSubscriptionsError } =
    useGetSubscriptions();
  console.log(subscriptions);

  return (
    <Suspense>
      <Loading
        loading={fetchingSubscriptions}
        error={!!fetchingSubscriptionsError}
      >
        <div className="grid lg:grid-cols-3 gap-4 h-max mt-12">
          {subscriptions?.map((subscription: SubscriptionProps) => (
            <SubscriptionCard key={subscription.id} {...subscription} />
          ))}
        </div>
      </Loading>
    </Suspense>
  );
}
