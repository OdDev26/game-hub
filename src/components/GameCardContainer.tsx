import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
// We create this component to hold the common styles of both the GameCard and GameCardSkeleton Components
const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box borderRadius={10} overflow="hidden">
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
