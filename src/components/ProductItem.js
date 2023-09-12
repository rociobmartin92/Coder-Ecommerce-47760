import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";

const ProductItem = ({ item }) => {
  // const { height, width } = useWindowDimensions();

  // console.log("height:", height, "width: ", width);

  return (
    <View style={styles.container}>
      <Text style={width < 300 ? styles.textMin : styles.text}>
        {item.title}
      </Text>

      <Image
        style={styles.image}
        height={80}
        width={80}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.mediumBlue,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 20,
  },
  textMin: {
    fontSize: 10,
    fontWeight: "900",
    marginLeft: 20,
  },
  image: {
    marginRight: 10,
  },
});

export default ProductItem;
