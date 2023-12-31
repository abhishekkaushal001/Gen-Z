import { Heading } from "@chakra-ui/react";
import Genres from "../interfaces/genres";
import ParentPlatforms from "../interfaces/parentPlatforms";

interface Props {
  genre?: Genres;
  platform?: ParentPlatforms;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
