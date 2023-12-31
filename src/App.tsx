import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genres from "./interfaces/genres";
import PlatformSelector from "./components/PlatformSelector";
import ParentPlatforms from "./interfaces/parentPlatforms";

function App() {
  const [selectedGenre, setGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setPlatform] = useState<ParentPlatforms | null>(
    null
  );

  const getGenre = (genre: Genres | null) => {
    if (genre === null) return;

    return genre;
  };

  const getPlatform = (platform: ParentPlatforms | null) => {
    if (platform === null) return;

    return platform;
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5} paddingTop={3}>
          <GenreList
            genreSelected={getGenre(selectedGenre)}
            onSelectGenre={(genre) => setGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={getPlatform(selectedPlatform)}
          onSelectplatform={(platform) => setPlatform(platform)}
        />
        <GameGrid genre={getGenre(selectedGenre)} />
      </GridItem>
    </Grid>
  );
}

export default App;
