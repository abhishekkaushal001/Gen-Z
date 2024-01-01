import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardLoadingSkeleton from "./skeletons/CardLoadingSkeleton";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";
import React from "react";

interface Props {
  genre?: Genres;
  platform?: ParentPlatforms;
  sort?: string;
  serach?: string;
}

const GameGrid = ({ genre, platform, sort, serach }: Props) => {
  const { data, error, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useGames(genre, platform, sort, serach);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => <CardLoadingSkeleton key={skeleton} />)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetching ? "Loading.." : "load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
