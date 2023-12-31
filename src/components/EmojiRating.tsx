import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FcLike } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcRating } from "react-icons/fc";

interface Props {
  rating: number;
}

const EmojiRating = ({ rating }: Props) => {
  if (rating < 3) return null;

  const iconMap: { [key: number]: IconType[] } = {
    3: [FcLike],
    4: [FcLike, FcRating],
    5: [FcLike, FcRating, FcApproval],
  };

  const current = iconMap[rating];

  return (
    <HStack>
      {current.map((icon) => (
        <Icon as={icon} marginTop={2} boxSize="25px" />
      ))}
    </HStack>
  );
};

export default EmojiRating;
