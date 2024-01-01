import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useInfineData from "./useInfineData";

const useGames = (
  genre?: Genres,
  platform?: ParentPlatforms,
  sort?: string,
  search?: string
) => useInfineData(genre, platform, sort, search);

export default useGames;
