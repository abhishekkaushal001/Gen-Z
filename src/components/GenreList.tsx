import { Box, Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreLoadingSkeleton from "./skeletons/GenreLoadingSkeleton";
import Genres from "../interfaces/genres";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [0, 1, 2, 3, 4, 5, 6];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreLoadingSkeleton key={skeleton} />)}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Box overflow="hidden" _hover={{ overflow: "visible" }}>
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
