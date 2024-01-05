import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Screenshots {
  id: number;
  image: string;
}

interface GameSs {
  count: number;
  results: Screenshots[];
}

const useGameScreenshots = (id: number | string) => {
  return useQuery({
    queryKey: ["games", "screenshots", id],
    queryFn: () =>
      apiClient.get<GameSs>(`/games/${id}/screenshots`).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24H
  });
};

export default useGameScreenshots;
