import type { Cake } from "../data/cakes";
import { cakes } from "../data/cakes";

const useCakes = (selectedCategory: string | null): Cake[] => {
  if (!selectedCategory) return cakes;
  return cakes.filter((c) => c.category === selectedCategory);
};

export default useCakes;
