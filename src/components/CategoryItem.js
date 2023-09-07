import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const CategoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 22,
    marginHorizontal: 20,
    marginVertical: 8,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",

    // BORDER STYLES
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 20,

    // Text styles
    textAlign: "center",
    padding: 8,
  },
});

export default CategoryItem;
