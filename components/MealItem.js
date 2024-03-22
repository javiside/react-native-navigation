import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/constants/colors";
import Screens from "../utils/constants/screens";
import MealDetails from "./MealDetails/MealDetails";
import { useNavigation } from "@react-navigation/native";

export const MealItem = ({ id, imageUrl, title, ...rest }) => {
  const { navigate } = useNavigation();

  const onPressHandler = () => {
    navigate(Screens.MEAL_DETAILS, { id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails {...rest} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 4,
    margin: 16,
    shadowColor: Colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 200,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
});
