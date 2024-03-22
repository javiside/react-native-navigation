import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails/MealDetails";

import { MEALS } from "../utils/mock/dummy-data";
import Colors from "../utils/constants/colors";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route }) {
  const { setOptions } = useNavigation();
  const mealId = route.params.id;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const PressHandler = () => {
    console.log("pressed");
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <IconButton icon="star" color={Colors.white} onPress={PressHandler} />
      ),
    });
  }, [setOptions]);

  return (
    <ScrollView style={styles.wrapper}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View>
        <MealDetails {...meal} textStyle={styles.detailText} />
      </View>
      <View style={styles.listsWrapper}>
        <View style={styles.lists}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: Colors.white,
  },
  subtitle: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  subtitleText: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listsWrapper: {
    alignItems: "center",
  },
  lists: {
    width: "80%",
  },
});
