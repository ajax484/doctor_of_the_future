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
      },
      onSuccess: (values) => {
        console.log(values);
        toast({
          title: "Transaction Successful!",
        });
      },
      onError: (error: AxiosError) => {
        console.log(error);

        toast({
          title: error.message,
        });
      },
    });

    return {
      performingTransaction,
      TransactionError,
      initializeTransaction,
    };
  };
