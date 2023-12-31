import bullsEye from "../assets/bulls-eye.webp";
import thumsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    // With this the Image component would have access to the map's keys and values
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  if (rating < 3) return null;
  return (
    <>
      <Image {...emojiMap[rating]} marginTop={1} />{" "}
      {/**The boxSize prop determines the image size */}
    </>
  );
};

export default Emoji;
