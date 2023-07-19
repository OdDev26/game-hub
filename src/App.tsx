import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  count: number;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // We do this so we can get rid of the error caused by passing '{}'

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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack
            spacing={5}
            alignItems="flex-start"
            marginLeft={3}
            marginBottom={5}
          >
            {" "}
            {/**spacing is used to apply spacing between the 'HStack' children */}
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSortOrderSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
