import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav  main"`, // defines columns (nav & main) to show on small screens
          lg: `"nav nav" "aside main"`, // specifies that we want to see all columns (nav, aside and main) on large screens only (With size above 1024px)
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          {" "}
          {/**This ensures aside area is only shown on large screens */}
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
