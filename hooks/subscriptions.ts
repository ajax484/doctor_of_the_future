import { subscriptionTransaction } from "@/types/transactions";
import { getRequest } from "@/utils/api";
import { useQuery, useQueryErrorResetBoundary } from "react-query";

interface SubscriptionError {
  // Define the structure of the error object here
  // For example:
  message: string;
  // ... other properties
}

interface UseGetUserCurrentSubscriptionResult {
  subscription: subscriptionTransaction | {};
  fetchingSubscription: boolean;
  fetchingSubscriptionError: SubscriptionError | null;
}

export const useGetUserCurrentSubscription =
  (): UseGetUserCurrentSubscriptionResult => {
    const {
      data: subscription,
      isFetching: fetchingSubscription,
      error: fetchingSubscriptionError,
    } = useQuery<subscriptionTransaction, SubscriptionError>(
      ["get subscription"],
      async () => {
        const { data, status } = await getRequest({
          endpoint: `/api/blog/subscriptions`,
        });

        if (status !== 200) throw data;

        return data;
      },
      {
        onError: (error) => {
          console.log(error);

          // alert(error.message);
        },
      }
    );

    return {
      subscription: subscription || ({} as subscriptionTransaction),
      fetchingSubscription,
      fetchingSubscriptionError,
    };
  };
