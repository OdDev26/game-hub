import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameData {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// To specify what we need for api call response
interface FetchGamesResponse {
  count: number;
  results: GameData[];
}

const useGames = () => {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) // FetchGamesResponse is api call response data
      .then((res) => {
        setGameData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        {
          setError(error.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  return { gameData, error, isLoading };
};

export default useGames;
