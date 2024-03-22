import { FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../utils/mock/dummy-data";

export default function CategoriesScreen({}) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      numColumns={2}
      renderItem={({ item }) => <CategoryCard {...item} />}
    />
  );
}
