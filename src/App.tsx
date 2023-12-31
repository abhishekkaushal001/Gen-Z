import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genres from "./interfaces/genres";

function App() {
  const [selectedGenre, setGenre] = useState<Genres | null>(null);

  const handleGenre = (genre: Genres) => {
    setGenre(genre);
  };

  const getGenre = (genre: Genres | null) => {
    if (genre === null) return;

    return genre;
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
          <GenreList onSelectGenre={handleGenre} />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameGrid genre={getGenre(selectedGenre)} />
      </GridItem>
    </Grid>
  );
}

export default App;
