import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CriticScore from "../components/CriticScore";
import GameTrailers from "../components/GameTrailers";
import GameScreenShots from "../components/GameScreenShots";

const GamesDetailsPage = () => {
  const [expand, setExpand] = useState(false);
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  const description = data?.description_raw;

  if (error) throw error;
  if (!data) return null;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} padding={7}>
        <Box>
          {isLoading && <Spinner />}
          <Heading marginBottom={3}>{data?.name}</Heading>
          <Text>
            {expand ? description : `${description?.slice(0, 299)}...`}
            <Button
              onClick={() => setExpand(!expand)}
              marginLeft={2}
              size="xs"
              fontWeight="bold"
              colorScheme="yellow"
            >
              {expand ? "Show Less" : "Show More"}
            </Button>{" "}
          </Text>

          <SimpleGrid columns={2} marginX={10} marginY={8} spacingY={10}>
            <List>
              <Heading fontWeight="bold" fontSize="larger" color="gray.600">
                Platforms
              </Heading>
              {data?.parent_platforms.map((p) => (
                <ListItem key={p.platform.id}>{p.platform.name}</ListItem>
              ))}
            </List>

            <Box>
              <Heading fontWeight="bold" fontSize="larger" color="gray.600">
                Metascore
              </Heading>
              <CriticScore score={data?.metacritic!} />
            </Box>

            <Box>
              <List>
                <Heading fontWeight="bold" fontSize="larger" color="gray.600">
                  Genres
                </Heading>
                {data?.genres.map((g) => (
                  <ListItem key={g.id}>{g.name}</ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <List>
                <Heading fontWeight="bold" fontSize="larger" color="gray.600">
                  Publishers
                </Heading>
                {data?.publishers.map((p) => (
                  <ListItem key={p.id}>{p.name}</ListItem>
                ))}
              </List>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Box marginX={10} marginY={8}>
            <GameTrailers id={data.id} />
          </Box>

          <Box marginX={10} marginY={8}>
            <GameScreenShots id={data.id} />
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GamesDetailsPage;
