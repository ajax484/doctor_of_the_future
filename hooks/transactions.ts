import { toast } from "@/components/ui/use-toast";
import { postRequest } from "@/utils/api";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type UseInitializeTransactionResult = {
  performingTransaction: boolean;
  TransactionError: unknown;
  initializeTransaction: () => {};
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
          title: "Transaction Successful!",
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
