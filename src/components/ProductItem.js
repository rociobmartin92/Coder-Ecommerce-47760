import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { setProductSelected } from "../redux/slice/homeSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ item, navigation }) => {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  const onHandleProductDetail = () => {
    // console.log("Item pressed in Product Item", item);

    dispatch(setProductSelected(item));

    navigation.navigate("productDetail");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onHandleProductDetail()}>
        <Text style={width < 300 ? styles.textMin : styles.text}>
          {item.title}
        </Text>
      </Pressable>

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
    width: "70%",
  },
  textMin: {
    fontSize: 10,
    fontWeight: "900",
    marginLeft: 20,
    width: "70%",
  },
  image: {
    marginRight: 10,
  },
});

export default ProductItem;
