import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${gameQuery.platforms?.name || ""} ${
        gameQuery.genre?.name || ""
      } Games`}
    </Heading>
  );
};

export default GameHeading;
