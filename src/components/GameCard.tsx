import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../interfaces/game";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import EmojiRating from "./EmojiRating";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Card overflow="hidden" borderRadius={15}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack marginY={1} justifyContent="space-between" marginBottom={3}>
            <HStack>
              {game.parent_platforms.map(({ platform }) => (
                <PlatformIcons key={platform.id} platforms={platform} />
              ))}
            </HStack>
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
          <EmojiRating rating={game.rating_top} />
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
