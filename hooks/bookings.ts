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
    isFetching: fetchingbookings,
    error: fetchingbookingsError,
  } = useQuery({
    queryKey: "get bookings data",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: "/api/bookings" });
      return data as unknown as BookingProps[];
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000,
  });

  return {
    bookings: bookings || [],
    fetchingbookings,
    fetchingbookingsError,
  };
};

export const useGetUsersBookings = () => {
  const {
    data: usersBookings,
    isFetching: fetchingUsersBookings,
    error: fetchingUsersBookingsError,
  } = useQuery({
    queryKey: "get users bookings data",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: "/api/users/bookings" });
      // console.log(data);
      return data.map((timeSlot) => new Date(timeSlot.time_of_session).toISOString());
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000,
  });

  return {
    usersBookings: usersBookings || [],
    fetchingUsersBookings,
    fetchingUsersBookingsError,
  };
};

export const useGetBooking = ({ _id }: { _id: string }) => {
  const {
    data: booking,
    isFetching: fetchingBooking,
    error: fetchingBookingError,
  } = useQuery({
    queryKey: ["get booking", _id],
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: `/api/bookings/${_id}` });
      return data as unknown as BookingProps;
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    booking: booking || {},
    fetchingBooking,
    fetchingBookingError,
  };
};
