import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import Response from "../interfaces/fetchResponse";
import Game from "../interfaces/game";

const useInfiniteData = (
  genre?: Genres,
  platform?: ParentPlatforms,
  sort?: string,
  search?: string
) => {
  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: [
      "data",
      "/games",
      genre?.slug ? genre?.slug : "all",
      platform?.slug ? platform?.slug : "all",
      sort,
      search,
    ],
    queryFn: async ({ pageParam }) => {
      const res = await apiClient.get<Response<Game>>("/games", {
        params: {
          genres: genre?.slug,
          parent_platforms: platform?.id,
          ordering: sort,
          search: search,
          page: pageParam,
        },
      });
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //2hHrs
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useInfiniteData;
