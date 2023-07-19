import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [count, setCount] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // We're telling TS that this state is of type Genre or null

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav  main"`, // defines columns (nav & main) to show on small screens
          lg: `"nav nav" "aside main"`, // specifies that we want to see all columns (nav, aside and main) on large screens only (With size above 1024px)
        }}
        templateColumns={{
          base: "1fr", // This means we want each column to stretch and occupy the available space  (This results to a fixed column size
          lg: "200px 1fr", // This means we want the first column to have a size of 200px and the second column to occupy the available space (This results to a fixed column size)
        }} // We use this to specify column sizes
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          {" "}
          {/**This ensures aside area is only shown on large screens */}
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
