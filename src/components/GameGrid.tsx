import useGames from "../hooks/useGames";

import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { gameData, error } = useGames();
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {gameData.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
