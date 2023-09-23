import { ProductProps } from "@/types/products";
import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";

export const useGetShop = () => {
  const {
    data: shop,
    isFetching: fetchingShop,
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
    staleTime: 1000,
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
    isFetching: fetchingItem,
    error: fetchingItemError,
  } = useQuery({
    queryKey: ["get item", _id],
    queryFn: async () => {
      const { data, status } = await getRequest({
        endpoint: `/api/shop/${_id}`,
      });

      if (status !== 200) throw data;

      return data as unknown as ProductProps;
    },
    onError: (error) => {
      // console.log(error);

      // alert(error.message);
    },
  });

  return {
    item: item || [],
    fetchingItem,
    fetchingItemError,
  };
};

export const useGetItemLinks = ({ ids }: { ids: string }) => {
  const {
    data: links,
    isFetching: fetchingLinks,
    error: fetchingLinksError,
  } = useQuery({
    queryKey: ["get item", ids],
    queryFn: async () => {
      const JSONIds = JSON.stringify(ids);
      const { data, status } = await getRequest({
        endpoint: `/api/shop/link?ids=${JSONIds}`,
      });

      if (status !== 200) throw data;

      return data;
    },
    onError: (error) => {
      // console.log(error);

      // alert(error.message);
    },
  });

  return {
    links: links || [],
    fetchingLinks,
    fetchingLinksError,
  };
};
