import {
  Card,
  CardBody,
  Image,
  Skeleton,
  Text,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import type { Cake } from "../data/cakes";

interface Props {
  cake: Cake;
}

const CakeCard = ({ cake }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton isLoaded={loaded}>
        <Image
          src={cake.imagePath}
          alt={cake.name}
          objectFit="cover"
          width="100%"
          height="220px"
          onLoad={() => setLoaded(true)}
        />
      </Skeleton>
      <CardBody>
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" fontSize="md">
            {cake.name}
          </Text>
          <Badge colorScheme="pink" borderRadius="full" px={2}>
            {cake.category}
          </Badge>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CakeCard;
