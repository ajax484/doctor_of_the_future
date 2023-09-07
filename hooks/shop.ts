import { ProductProps } from "@/types/products";
import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";

export const useGetShop = () => {
  const {
    data: shop,
    isLoading: fetchingShop,
    error: fetchingShopError,
  } = useQuery({
    queryKey: "get shop",
    queryFn: async () => {
      const { data, status } = await getRequest({ endpoint: "/api/shop" });

      if (status !== 200) throw data;

      return data as unknown as ProductProps[];
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    shop: shop || [],
    fetchingShop,
    fetchingShopError,
  };
};

export const useGetItem = ({ _id }: { _id: string }) => {
  const {
    data: item,
    isLoading: fetchingItem,
    error: fetchingItemError,
  } = useQuery({
    queryKey: "get shop",
    queryFn: async () => {
      const { data, status } = await getRequest({
        endpoint: `/api/shop/${_id}`,
      });

      if (status !== 200) throw data;

      return data as unknown as ProductProps;
    },
    onError: (error) => {
      console.log(error);
      
      // alert(error.message);
    },
  });

  return {
    item: item || [],
    fetchingItem,
    fetchingItemError,
  };
};