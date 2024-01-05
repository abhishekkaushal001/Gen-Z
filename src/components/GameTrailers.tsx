import { Alert, AlertIcon, AspectRatio, Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number | string;
}

const GameTrailers = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailers(id);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (!data) return null;
  if (data.results.length === 0)
    return (
      <Alert status="warning">
        {" "}
        <AlertIcon /> Game Trailer is not availble.
      </Alert>
    );

  return (
    <AspectRatio maxW="100%" ratio={6 / 3} borderRadius={15} overflow="hidden">
      <video
        src={data.results[0].data[480]}
        poster={data.results[0].preview}
        controls
      ></video>
    </AspectRatio>
  );
};

export default GameTrailers;
