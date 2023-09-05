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
    margin: 5,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    // BORDER STYLES
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 18,

    // Text styles
    textAlign: "center",
    padding: 8,
  },
});

export default CategoryItem;
