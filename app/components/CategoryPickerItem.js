import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    alignSelf: "center",
    width: "33%",
    flex: 1,
    marginTop: 12,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
