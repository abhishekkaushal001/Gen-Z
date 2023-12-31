import Game from "../interfaces/game";
import Genres from "../interfaces/genres";
import useData from "./useData";

const useGames = (genre?: Genres) =>
  useData<Game>("/games", genre, [genre?.slug]);

export default useGames;
