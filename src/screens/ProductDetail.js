import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import { products } from "../data/products";
import Header from "../components/Header";

const ProductDetail = ({ navigation }) => {
  const initialProd = products[1];

  return (
    <SafeAreaView>
      <Header title="Detalle" />
      <Pressable onPress={() => navigation.goBack()}>
        <Text> Ir Atrás </Text>
      </Pressable>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: initialProd.images[2],
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}> {initialProd.title} </Text>
          <Text style={styles.price}> ${initialProd.price} </Text>
        </View>
        <Text style={styles.description}> {initialProd.description} </Text>
        <Button
          color="red"
          title="Agregar al carrito"
          onPress={() => console.log("Hola funciona")}
        />
        <Text style={styles.description}> Rating: {initialProd.rating} </Text>
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
