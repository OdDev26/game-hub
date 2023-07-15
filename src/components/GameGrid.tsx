import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface GameData {
  id: number;
  name: string;
}
// To specify what we need for api call response
interface FetchGamesResponse {
  count: number;
  results: GameData[];
}

const GameGrid = () => {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games") // FetchGamesResponse is api call response data
      .then((res) => setGameData(res.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        <li>Hello</li>
      </ul>
    </>
  );
};

export default GameGrid;
