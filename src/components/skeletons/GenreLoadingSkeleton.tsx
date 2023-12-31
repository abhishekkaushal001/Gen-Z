import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreLoadingSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText></SkeletonText>
      </HStack>
    </ListItem>
  );
};

export default GenreLoadingSkeleton;
