import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
