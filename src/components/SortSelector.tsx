import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (order: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const orders = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort || "Order by: Relevance"}
      </MenuButton>
      <MenuList>
        {orders.map((order) => (
          <MenuItem
            onClick={() => onSelectSort(order)}
            key={Math.random().toPrecision(5)}
          >
            {order}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
