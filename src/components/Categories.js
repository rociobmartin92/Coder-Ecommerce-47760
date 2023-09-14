import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";
import { colors } from "../theme/colors";

const Categories = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.heavyBlue,
    paddingTop: 20,
  },
});

export default Categories;
