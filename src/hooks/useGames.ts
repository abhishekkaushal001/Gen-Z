import Game from "../interfaces/game";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useData from "./useData";

const useGames = (genre?: Genres, platform?: ParentPlatforms, sort?: string) =>
  useData<Game>("/games", genre, platform, sort, [
    genre?.slug,
    platform?.id,
    sort,
  ]);

export default useGames;
