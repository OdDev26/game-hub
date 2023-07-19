import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import PlatformSelector from "./PlatformSelector";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <PlatformSelector />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
