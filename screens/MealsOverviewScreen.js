import { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../utils/mock/dummy-data";
import { MealItem } from "../components/MealItem";

export default function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  return (
    <FlatList
      data={meals}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <MealItem {...item} />}
    />
  );
}
