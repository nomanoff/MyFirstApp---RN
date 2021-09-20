import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="pencil" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    bottom: 24,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default NewListingButton;
