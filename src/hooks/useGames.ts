import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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

const useGames = () => useData<GameData>("/games");

export default useGames;
