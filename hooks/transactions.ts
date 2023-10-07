import { toast } from "@/components/ui/use-toast";
import {
  bookingTransaction,
  planTransaction,
  shopTransaction,
} from "@/types/transactions";
import { getRequest, postRequest } from "@/utils/api";
import { AxiosError } from "axios";
import { UseMutateFunction, useMutation, useQuery } from "react-query";
import { subscriptionTransaction } from "@/types/transactions";

type UseInitializeTransactionResult = {
  performingTransaction: boolean;
  TransactionError: unknown;
  initializeTransaction: UseMutateFunction;
};

export const UseInitializeTransaction: () => UseInitializeTransactionResult =
  () => {
    const {
      mutate: initializeTransaction,
      isLoading: performingTransaction,
      error: TransactionError,
    } = useMutation({
      mutationFn: async ({ payload, payMethod }) => {
        // console.log(payload);
        const { data } = await postRequest({
          endpoint: `/api/transactions/initialize/${payMethod}`,
          payload,
        });
        // console.log(data);

        if (data?.status !== 200) {
          throw data?.error;
        }
        return data;
      },
      onSuccess: (values) => {
        console.log(values);
        const redirectUrl = values?.data?.link;
        toast({
          title: "Processing Transaction...",
        });

        window.location.href = redirectUrl;
      },
      onError: (error) => {
        // console.log(error);

        toast({
          title: error,
        });
      },
    });

    return {
      performingTransaction,
      TransactionError,
      initializeTransaction,
    };
  };

type IuseGetUserTransactions = {
  (params: { prdtType: string }): {
    transactions: shopTransaction[] | bookingTransaction[] | planTransaction[];
    fetchingTransactionsError: unknown;
    fetchingTransactions: boolean;
  };
};

type IuseGetUserTransaction = {
  (params: { reference: string; prdtType: string }): {
    transaction: shopTransaction | bookingTransaction | planTransaction;
    fetchingTransactionError: unknown;
    fetchingTransaction: boolean;
  };
};

export const useGetUserTransactions: IuseGetUserTransactions = ({
  prdtType,
}) => {
  const {
    data: transactions,
    isFetching: fetchingTransactions,
    error: fetchingTransactionsError,
  } = useQuery({
    queryKey: ["get transactions", prdtType],
    queryFn: async () => {
      const { data, status } = await getRequest({
        endpoint: `/api/transactions/${prdtType}`,
      });

      if (status !== 200) throw data;

      return data as unknown as
        | shopTransaction[]
        | bookingTransaction[]
        | planTransaction[];
    },
    onError: (error) => {
      // console.log(error);
      // alert(error.message);
    },
  });

  return {
    transactions: transactions || [],
    fetchingTransactions,
    fetchingTransactionsError,
  };
};

export const useGetUserTransaction: IuseGetUserTransaction = ({
  reference,
  prdtType,
}) => {
  const {
    data: transaction,
    isFetching: fetchingTransaction,
    error: fetchingTransactionError,
  } = useQuery({
    queryKey: ["get transaction", reference, prdtType],
    queryFn: async () => {
      const { data, status } = await getRequest({
        endpoint: `/api/transactions/${prdtType}/${reference}`,
      });

      if (status !== 200) throw data;

      return data as unknown as
        | shopTransaction
        | bookingTransaction
        | planTransaction;
    },
    onError: (error) => {
      // console.log(error);
      // alert(error.message);
    },
  });

  return {
    transaction: transaction || {},
    fetchingTransaction,
    fetchingTransactionError,
  };
};

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

        return data.data;
      },
      {
        onError: (error) => {
          // console.log(error);
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
