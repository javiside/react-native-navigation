import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/constants/colors";

const List = ({ data }) =>
  data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.accent,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  itemText: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default List;
