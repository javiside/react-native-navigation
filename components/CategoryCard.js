import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Screens from "../utils/constants/screens";
import Colors from "../utils/constants/colors";

export default function CategoryCard({ color, id, title }) {
  const { navigate } = useNavigation();
  const onPressHandler = () => {
    navigate(Screens.MEALS_OVERVIEW, { categoryId: id });
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          ...(pressed ? [styles.buttonPressed] : []),
        ]}
      >
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    height: 150,
    margin: 16,
    shadowColor: Colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
