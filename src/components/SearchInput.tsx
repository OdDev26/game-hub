import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  // To keep track of the input value, we do
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // To prevent data from being sent to serve
        if (ref.current) onSearch(ref.current?.value); // we are checking first if ref.current has a value
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
        />{" "}
        {/**  We set variant to filled to make the input box a little nicer*/}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
