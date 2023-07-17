import React from "react";
import { GameData } from "../hooks/useGames";
import { Card, Text, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        {/** We set overflow to hidden to ensure the border radius is applied to the top of each cards */}
        <Image src={game.background_image} />
        <CardBody>
          <Heading paddingLeft="-1px" fontSize="2xl">
            {game.name}
          </Heading>{" "}
          {/** We use 2xl to make the font size smaller */}
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
