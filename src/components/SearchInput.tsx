import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSerach: (serach: string) => void;
}

const SearchInput = ({ onSerach }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSerach(ref.current.value);
        }
      }}
      style={{ width: "50%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seach for anything..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
