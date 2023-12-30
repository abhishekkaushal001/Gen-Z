import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardLoadingSkeleton = () => {
  return (
    <Card width="250px" overflow="hidden" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardLoadingSkeleton;
