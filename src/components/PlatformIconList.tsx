import React from "react";
import {
  FaWindows,
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { GameData } from "../hooks/useGames";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // We create a map object to map each platform slug to an icon
  const iconMap: { [key: string]: IconType } = {
    // We need to do line 23 to prevent an error in line 38
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <div>
      <HStack marginY={"10px"}>
        {" "}
        {/** This translates to 1 X 4 =4px vertical margin */}
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color="gray.500"
          /> /** So the icon color is different from the Card heading color */
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
