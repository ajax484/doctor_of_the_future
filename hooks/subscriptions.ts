import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";
import { SubscriptionProps } from "@/types/products";

interface UseGetSubscriptionsResult {
  subscriptions: SubscriptionProps[];
  fetchingSubscriptions: boolean;
  fetchingSubscriptionsError: unknown; // Adjust this type as needed for error handling
}

export const useGetSubscriptions: () => UseGetSubscriptionsResult = () => {
  const {
    data: subscriptions,
    isFetching: fetchingSubscriptions,
    error: fetchingSubscriptionsError,
  } = useQuery({
    queryKey: "get subscriptions",
    queryFn: async () => {
      const { data, status } = await getRequest({
        endpoint: "/api/subscriptions",
      });

      // console.log(status);
      if (status !== 200) throw "something went wrong";
      return data as unknown as SubscriptionProps[];
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    subscriptions: subscriptions || [],
    fetchingSubscriptions,
    fetchingSubscriptionsError,
  };
};

export const useGetSubscription = ({ _id }: { _id: string }) => {
  const {
    data: subscription,
    isFetching: fetchingSubscription,
    error: fetchingSubscriptionError,
  } = useQuery({
    queryKey: "get subscriptions data",
    queryFn: async () => {
      const { data } = await getRequest({
        endpoint: `/api/subscriptions/${_id}`,
      });
      return data as unknown as SubscriptionProps;
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000,
  });

  return {
    subscription,
    fetchingSubscription,
    fetchingSubscriptionError,
  };
};
