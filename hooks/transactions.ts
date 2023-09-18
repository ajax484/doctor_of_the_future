import { toast } from "@/components/ui/use-toast";
import {
  bookingTransaction,
  planTransaction,
  shopTransaction,
} from "@/types/transactions";
import { getRequest, postRequest } from "@/utils/api";
import { AxiosError } from "axios";
import { UseMutateFunction, useMutation, useQuery } from "react-query";

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
      mutationFn: async ({ payload }) => {
        console.log(payload);
        const { data } = await postRequest({
          endpoint: "/api/transactions/initialize",
          payload,
        });
        console.log(data);

        if (data?.status !== 200) {
          throw data?.error;
        }
        return data;
      },
      onSuccess: (values) => {
        console.log(values?.responseData?.data?.authorization_url);
        const redirectUrl = values?.responseData?.data?.authorization_url;
        toast({
          title: "Processing Transaction...",
        });

        window.location.href = redirectUrl;
      },
      onError: (error) => {
        console.log(error);

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

type IUseGetTransaction = {
  (params: { reference: string; prdtType: string }): {
    transaction: shopTransaction | bookingTransaction | planTransaction;
    fetchingTransactionError: unknown;
    fetchingTransaction: boolean;
  };
};

export const useGetTransaction: IUseGetTransaction = ({
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
      console.log(error);

      // alert(error.message);
    },
  });

  return {
    transaction: transaction || {},
    fetchingTransaction,
    fetchingTransactionError,
  };
};
