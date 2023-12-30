import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Genres from "../interfaces/genres";
import GenresApiResponse from "../interfaces/genresApiResponse";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GenresApiResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenres;
