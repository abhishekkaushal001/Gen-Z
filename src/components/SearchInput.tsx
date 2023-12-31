import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);

  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearch(ref.current.value);
          navigate("/");
        }
      }}
      style={{ width: "70%" }}
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
