import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Response from "../interfaces/fetchResponse";

const useDataQueryExt = <T>(endpoint: string, data: T[]) => {
  return useQuery<T[], Error>({
    queryKey: ["data", endpoint],

    queryFn: async () => {
      const { data } = await apiClient.get<Response<T>>(endpoint);
      return data.results;
    },

    staleTime: 24 * 60 * 60 * 1000, //24Hrs

    initialData: data,
  });
};

export default useDataQueryExt;
