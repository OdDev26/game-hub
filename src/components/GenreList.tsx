import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "./image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return <Spinner />; /** This displays a spinner if component is loading */
  return (
    <>
      <Flex justifyContent="flex-start">
        <Heading marginBottom={3} fontSize="2xl" as="h1">
          Genres
        </Heading>
      </Flex>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.name} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                objectFit="cover" // This ensures the images maintain their aspect ratio making them display properly
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal" /** This ensures the button text doesn't overlap with the image */
                textAlign="left" /** To ensure the button text is left aligned */
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} // For making a button bold
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="sm"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
