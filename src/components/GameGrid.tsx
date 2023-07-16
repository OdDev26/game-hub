import useGames from "../hooks/useGames";

import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCards";

const GameGrid = () => {
  const { gameData, error } = useGames();
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {" "}
        {/** With this on small screens(e.g a mobile device) we would have 1 column while on medium screens e.g tablet we would have 2 columns and so on */}
        {gameData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
