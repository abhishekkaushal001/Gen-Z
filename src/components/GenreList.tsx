import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreLoadingSkeleton from "./skeletons/GenreLoadingSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const setGenre = useGameQueryStore((s) => s.setGenre);
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);

  const skeletons = [0, 1, 2, 3, 4, 5, 6];

  if (error) return null;

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreLoadingSkeleton key={skeleton} />)}

        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={genre.image_background}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
                onClick={() => setGenre(genre)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
