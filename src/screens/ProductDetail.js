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
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const ProductDetail = ({ navigation, route }) => {
  const initialProd = products[1];

  const { item } = route.params;

  console.log(item);

  return (
    <SafeAreaView>
      <Header title="Detalle" navigation={navigation} />
      <Pressable
        style={{ marginLeft: 15, marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="caretleft" size={24} color={colors.mediumBlue} />
      </Pressable>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}> {item.title} </Text>
          <Text style={styles.price}> ${item.price} </Text>
        </View>
        <Text style={styles.description}> {item.description} </Text>
        <Button
          color="red"
          title="Agregar al carrito"
          onPress={() => console.log("Hola funciona")}
        />
        <Text style={styles.description}> Rating: {item.rating} </Text>
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
