import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (serach: string) => void;
}

const NavBar = ({ onSerach }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        borderRadius="15px"
        margin="5px"
        marginStart="10px"
        boxSize="60px"
      />
      <SearchInput onSerach={onSerach} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
