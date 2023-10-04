import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/ecApi";

const Home = ({ navigation }) => {
  // const categories = useSelector((state) => state.homeSlice.allCategories);

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();

  // console.log(JSON.stringify(datos, null, " "));

  return (
    <SafeAreaView style={{ marginBottom: 40, flex: 1 }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator style={{}} size="small" color="#0000ff" />
        </View>
      ) : (
        <>
          <Header title="Categorías" />
          <View style={styles.container}>
            <FlatList
              style={{ marginBottom: 50 }}
              data={categories}
              keyExtractor={(key) => key}
              renderItem={({ item }) => (
                <CategoryItem navigation={navigation} item={item} />
              )}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.heavyBlue,
    paddingTop: 20,
  },
});
export default Home;
