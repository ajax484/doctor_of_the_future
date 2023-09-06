import { PlanProps } from "@/types/products";
import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";

interface UseGetPlansResult {
  plans: PlanProps[];
  fetchingPlans: boolean;
  fetchingPlansError: unknown; // Adjust this type as needed for error handling
}

export const useGetPlans: () => UseGetPlansResult = () => {
  const {
    data: plans,
    isLoading: fetchingPlans,
    error: fetchingPlansError,
  } = useQuery({
    queryKey: "get plans",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: "/api/plans" });
      return data as unknown as PlanProps[];
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    plans: plans || [],
    fetchingPlans,
    fetchingPlansError,
  };
};

export const useGetItem = ({ _id }: { _id: string }) => {
  const {
    data: item,
    isLoading: fetchingItem,
    error: fetchingItemError,
  } = useQuery({
    queryKey: "get plans",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: `/api/plans/${_id}` });
      return data;
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    item: item || [],
    fetchingItem,
    fetchingItemError,
  };
};
