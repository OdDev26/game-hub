import React from "react";
import { GameData } from "../hooks/useGames";
import { Card, Text, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url";
import Emoji from "./Emoji";
interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        {/** We set overflow to hidden to ensure the border radius is applied to the top of each cards */}
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading textAlign="left" fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>{" "}
          {/** We use 2xl to make the font size smaller */}
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
