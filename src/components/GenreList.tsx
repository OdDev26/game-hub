import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "./image-url";
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return <Spinner />; /** This displays a spinner if component is loading */
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.name} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
