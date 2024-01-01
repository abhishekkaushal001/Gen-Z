import Game from "../interfaces/game";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useDataQuery from "./useDataQuery";

const useGames = (
  genre?: Genres,
  platform?: ParentPlatforms,
  sort?: string,
  search?: string
) => useDataQuery<Game>("/games", genre, platform, sort, search);

export default useGames;
