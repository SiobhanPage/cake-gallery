import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { categories } from "../data/cakes";

interface Props {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <Box paddingX={3}>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List spacing={1}>
        <ListItem>
          <Button
            whiteSpace="normal"
            textAlign="left"
            fontWeight={selectedCategory === null ? "bold" : "normal"}
            variant="link"
            fontSize="lg"
            onClick={() => onSelectCategory(null)}
          >
            All Cakes
          </Button>
        </ListItem>
        {categories.map((category) => (
          <ListItem key={category}>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedCategory === category ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryList;
