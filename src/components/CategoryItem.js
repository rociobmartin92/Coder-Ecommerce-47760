import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { setCategory } from "../redux/slice/homeSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const onHandleItem = () => {
    dispatch(setCategory(item));
    navigation.navigate("products", { item: item });
  };

  return (
    <Pressable onPress={() => onHandleItem()}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
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
