import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { products } from "../data/products";
import Header from "../components/Header";

const ProductDetail = () => {
  const initialProd = products[1];

  return (
    <View>
      <Header title="Detalle" />
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: initialProd.images[2],
          }}
        />
        <Text style={styles.title}> Título: {initialProd.title} </Text>
        <Text style={styles.description}>
          {" "}
          Descripcion: {initialProd.description}{" "}
        </Text>
        <Text> Rating: {initialProd.rating} </Text>
        <Text> Precio: {initialProd.price} </Text>
      </View>

      <View></View>
      <Button
        color="red"
        title="Agregar al carrito"
        onPress={() => console.log("Hola funciona")}
      />
    </View>
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
    fontSize: 30,
    fontFamily: "Pacifico",
  },
  description: {
    fontSize: 20,
    marginVertical: 15,
  },
});

export default ProductDetail;
