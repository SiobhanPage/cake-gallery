import { SimpleGrid, Text } from "@chakra-ui/react";
import useCakes from "../hooks/useCakes";
import CakeCard from "./CakeCard";

interface Props {
  selectedCategory: string | null;
}

const CakeGrid = ({ selectedCategory }: Props) => {
  const cakes = useCakes(selectedCategory);

  if (cakes.length === 0)
    return <Text>No cakes found in this category.</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </SimpleGrid>
  );
};

export default CakeGrid;
