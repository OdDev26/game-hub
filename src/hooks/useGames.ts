import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameData {
  id: number;
  name: string;
}
// To specify what we need for api call response
interface FetchGamesResponse {
  count: number;
  results: GameData[];
}

const useGames = () => {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) // FetchGamesResponse is api call response data
      .then((res) => setGameData(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { gameData, error };
};

export default useGames;