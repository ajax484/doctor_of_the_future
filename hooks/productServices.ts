export const useGet = () => {
    // const alertContext = useAlert();
  
    const {
      data: candidatesData,
      isLoading: fetchingCandidatesData,
      error: candidatesDataError,
    } = useQuery({
      queryKey: "get candidates",
      queryFn: async (values) => {
        const endpoint = (is_admin ? "/admin" : "/user") + "/candidates";
  
        const { data } = await getRequest({ endpoint });
        console.log(data);
        return data;
      },
      onError: (error) => {
        alertContext.addAlert({
          type: "error",
          label: handleApiError(error),
        });
      },
    });
  
    return {
      candidatesData: candidatesData || [],
      fetchingCandidatesData,
      candidatesDataError,
    };
  };