import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  affordability,
  complexity,
  duration,
  textStyle,
}) {
  return (
    <View style={styles.details}>
      <Text style={textStyle}>{duration}m</Text>
      <Text style={textStyle}>{complexity.toUpperCase()}</Text>
      <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 8,
  },
});
