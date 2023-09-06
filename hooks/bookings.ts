import { BookingProps } from "@/types/products";
import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";

interface UseGetbookingsResult {
  bookings: BookingProps[];
  fetchingbookings: boolean;
  fetchingbookingsError: unknown; // Adjust this type as needed for error handling
}

export const useGetBookings: () => UseGetbookingsResult = () => {
  const {
    data: bookings,
    isLoading: fetchingbookings,
    error: fetchingbookingsError,
  } = useQuery({
    queryKey: "get bookings",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: "/api/bookings" });
      return data as unknown as BookingProps[];
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    bookings: bookings || [],
    fetchingbookings,
    fetchingbookingsError,
  };
};

export const useGetItem = ({ _id }: { _id: string }) => {
  const {
    data: item,
    isLoading: fetchingItem,
    error: fetchingItemError,
  } = useQuery({
    queryKey: "get bookings",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: `/api/bookings/${_id}` });
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
