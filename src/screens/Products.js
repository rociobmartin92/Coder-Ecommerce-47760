import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

const Products = ({ route, navigation }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  const { item } = route.params;

  console.log(item);

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <SafeAreaView>
      <Header title={item} navigation={navigation} />

      <Search text={text} setText={setText} />

      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default Products;
