import useGames from "../hooks/useGames";

import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3} /**This handles the space between the GameCards**/
      >
        {" "}
        {/** With this on small screens(e.g a mobile device) we would have 1 column while on medium screens e.g tablet we would have 2 columns and so on */}
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer>
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
