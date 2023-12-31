import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardLoadingSkeleton from "./skeletons/CardLoadingSkeleton";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";

interface Props {
  genre?: Genres;
  platform?: ParentPlatforms;
  sort?: string;
  serach?: string;
}

const GameGrid = ({ genre, platform, sort, serach }: Props) => {
  const { data, error, isLoading } = useGames(genre, platform, sort, serach);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => <CardLoadingSkeleton key={skeleton} />)}

      {data.map((g) => (
        <GameCard game={g} key={g.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
