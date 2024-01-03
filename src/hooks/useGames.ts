import useGameQueryStore from "../store";
import useInfiniteData from "./useInfineData";

const useGames = () => {
  const { gameQuery } = useGameQueryStore();

  return useInfiniteData(
    gameQuery.genre,
    gameQuery.platforms,
    gameQuery.sort,
    gameQuery.search
  );
};

export default useGames;
