import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // we do this because the image is in a static assets folder(that would be deployed with the app)
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
