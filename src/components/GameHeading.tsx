import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platforms);
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
