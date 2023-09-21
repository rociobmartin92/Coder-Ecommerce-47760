import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const categories = useSelector((state) => state.homeSlice.allCategories);

  // console.log("CATEGORIES FROM STORE", categories);

  return (
    <SafeAreaView style={{ marginBottom: 40 }}>
      <Header title="Categorías" navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(key) => key}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} item={item} />
          )}
        />
      </View>
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
