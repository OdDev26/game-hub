import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// This is a custom and generic hook that includes the functionalities common to useGames and useGenres

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[] // we set dependencies to any because we're using this hook for both genres and games, also ? is compulsory because it comes after an optional param
) => {
  // we use AxiosRequestConfig so we can pass a query param using it to the backend
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        }) // we add a spread of the requestConfig here to add its properties to this object
        .then((res) => {
          setData(res.data.results);
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
    },
    deps ? [...deps] : []
  ); // because deps is an optional param, it can be undefined. We need a tenary operation to handle this

  return { data, error, isLoading };
};

export default useData;
