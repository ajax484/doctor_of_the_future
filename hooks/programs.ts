import { ProgramProps } from "@/types/products";
import { getRequest } from "@/utils/api";
import { useQuery } from "react-query";

interface UseGetprogramsResult {
  programs: ProgramProps[];
  fetchingprograms: boolean;
  fetchingprogramsError: unknown; // Adjust this type as needed for error handling
}

export const useGetPrograms: () => UseGetprogramsResult = () => {
  const {
    data: programs,
    isFetching: fetchingprograms,
    error: fetchingprogramsError,
  } = useQuery({
    queryKey: "get programs data",
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: "/api/programs" });
      return data as unknown as ProgramProps[];
    },
    onError: (error) => {
      alert(error);
    },
    staleTime: 1000, 
  });

  return {
    programs: programs || [],
    fetchingprograms,
    fetchingprogramsError,
  };
};

export const useGetProgram = ({ _id }: { _id: string }) => {
  const {
    data: program,
    isFetching: fetchingProgram,
    error: fetchingProgramError,
  } = useQuery({
    queryKey: ["get program", _id],
    queryFn: async () => {
      const { data } = await getRequest({ endpoint: `/api/programs/${_id}` });
      return data as unknown as ProgramProps;
    },
    onError: (error) => {
      alert(error);
    },
  });

  return {
    program: program || {},
    fetchingProgram,
    fetchingProgramError,
  };
};
