import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

const GamesDetailsPage = () => {
  const [expand, setExpand] = useState(false);
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  const description = data?.description_raw;

  if (error) throw new Error(data?.name + " is not available.");

  return (
    <>
      {isLoading && <Spinner />}
      <Heading marginBottom={3}>{data?.name}</Heading>
      <Text>
        {expand ? description : `${description?.slice(0, 299)}...`}
        <Button
          onClick={() => setExpand(!expand)}
          marginLeft={2}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
        >
          {expand ? "Show Less" : "Show More"}
        </Button>{" "}
      </Text>
    </>
  );
};

export default GamesDetailsPage;
