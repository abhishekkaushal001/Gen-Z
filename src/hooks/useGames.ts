import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Game from "../interfaces/game";
import GamesApiResponse from "../interfaces/gamesApiResponse";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GamesApiResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });

      return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;