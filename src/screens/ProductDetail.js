import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";

const ProductDetail = ({ navigation, route }) => {
  // const { item } = route.params;

  const productSelected = useSelector(
    (state) => state.homeSlice.productSelected
  );

  return (
    <SafeAreaView>
      <Header title="Detalle" navigation={navigation} />

      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: productSelected.images[0],
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}> {productSelected.title} </Text>
          <Text style={styles.price}> ${productSelected.price} </Text>
        </View>
        <Text style={styles.description}> {productSelected.description} </Text>
        {/* <Pressable>
          <Text style={styles.button}> Comprar</Text>
        </Pressable> */}
        <Text style={styles.description}>Rating: {productSelected.rating}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Dancing",
    marginTop: 15,
  },
  price: {
    fontSize: 18,
    fontFamily: "Dancing",
  },
  description: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 30,
    marginHorizontal: 10,
  },
});

export default ProductDetail;
