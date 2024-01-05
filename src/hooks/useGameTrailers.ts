import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Movies {
  id: number;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

interface GameMovies {
  count: number;
  results: Movies[];
}

const useGameTrailers = (id: number | string) => {
  return useQuery({
    queryKey: ["games", "movies", id],
    queryFn: () =>
      apiClient.get<GameMovies>(`/games/${id}/movies`).then((res) => res.data),
  });
};

export default useGameTrailers;
