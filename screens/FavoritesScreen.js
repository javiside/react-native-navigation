import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../utils/mock/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import Colors from "../utils/constants/colors";

export default function FavoritesScreen() {
  const favoriteCtx = useContext(FavoritesContext);
  const meals = MEALS.filter((meal) => favoriteCtx.ids.includes(meal.id));

  return meals.length ? (
    <FlatList
      data={meals}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <MealItem {...item} />}
    />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
