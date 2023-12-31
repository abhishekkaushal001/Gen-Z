import Game from "../interfaces/game";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useData from "./useData";

const useGames = (
  genre?: Genres,
  platform?: ParentPlatforms,
  sort?: string,
  search?: string
) =>
  useData<Game>("/games", genre, platform, sort, search, [
    genre?.slug,
    platform?.id,
    sort,
    search,
  ]);

export default useGames;
