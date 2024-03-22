import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/constants/colors";

const Subtitle = ({ children }) => (
  <View style={styles.subtitle}>
    <Text style={styles.subtitleText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  subtitle: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subtitleText: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Subtitle;
