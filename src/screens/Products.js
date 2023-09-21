import { FlatList, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";

const Products = ({ route, navigation }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);
  const { item } = route.params;

  const products = useSelector((state) => state.homeSlice.allProducts);

  const productsFilterByCategory = useSelector(
    (state) => state.homeSlice.productsFilterByCategory
  );

  console.log(productsFilterByCategory);

  useEffect(() => {
    setCategoryProd(productsFilterByCategory);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <SafeAreaView>
      <Header title={item} navigation={navigation} />
      <Pressable
        style={{ marginLeft: 15, marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="caretleft" size={24} color={colors.mediumBlue} />
      </Pressable>
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
