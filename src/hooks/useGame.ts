import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: async () => {
      const res = await apiClient.get<Game>("/games/" + slug);
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24Hrs
  });
};

export default useGame;
