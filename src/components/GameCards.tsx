import React from "react";
import { GameData } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface Props {
  game: GameData;
}

const GameCards = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        {" "}
        {/** We set overflow to hidden to ensure the border radius is applied to the top of each cards */}
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>{" "}
          {/** We use 2xl to make the font size smaller */}
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCards;
