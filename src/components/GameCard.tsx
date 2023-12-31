import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Game from "../interfaces/game";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
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
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
