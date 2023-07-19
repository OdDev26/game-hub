import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games"
        variant="filled"
      />{" "}
      {/**  We set variant to filled to make the input box a little nicer*/}
    </InputGroup>
  );
};

export default SearchInput;
