import Game from "../interfaces/game";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useData from "./useData";

const useGames = (genre?: Genres, platform?: ParentPlatforms) =>
  useData<Game>("/games", genre, platform, [genre?.slug, platform?.id]);

export default useGames;
