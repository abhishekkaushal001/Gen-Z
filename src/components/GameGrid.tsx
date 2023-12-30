import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardLoadingSkeleton from "./CardLoadingSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => <CardLoadingSkeleton key={skeleton} />)}

        {data.map((g) => (
          <GameCard game={g} key={g.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
