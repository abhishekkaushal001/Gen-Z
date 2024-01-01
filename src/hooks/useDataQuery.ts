import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";

interface Response<T> {
  count: number;
  results: T[];
}

const useDataQuery = <T>(
  endpoint: string,
  genre?: Genres,
  platform?: ParentPlatforms,
  sort?: string,
  search?: string
) => {
  return useQuery<T[], Error>({
    queryKey: [
      "data",
      endpoint,
      genre?.slug ? genre?.slug : "all",
      platform?.slug ? platform?.slug : "all",
      sort,
      search,
    ],

    queryFn: async () => {
      const { data } = await apiClient.get<Response<T>>(endpoint, {
        params: {
          genres: genre?.slug,
          parent_platforms: platform?.id,
          ordering: sort,
          search: search,
        },
      });
      return data.results;
    },

    staleTime: 30 * 60 * 1000, //30 min
  });
};

export default useDataQuery;
