import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5} paddingTop={8}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box>
          <Box paddingLeft="20px" marginRight="20px">
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <Box marginTop={5}>
            <GameGrid />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
