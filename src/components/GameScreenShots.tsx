import useGameScreenshots from "../hooks/useGameScreenshots";
import { Alert, AlertIcon, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  id: number | string;
}

const GameScreenShots = ({ id }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(id);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!data)
    return (
      <Alert status="error">
        {" "}
        <AlertIcon /> Game Screenshots not available.{" "}
      </Alert>
    );

  if (data.results.length === 0)
    return (
      <Alert status="error">
        {" "}
        <AlertIcon /> Game Screenshots not available.{" "}
      </Alert>
    );

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        spacingX="15px"
        spacingY="25px"
        padding={1}
      >
        {data.results.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            overflow="hidden"
            borderRadius={15}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;
