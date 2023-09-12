import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";

import { useFonts } from "expo-font";
import ProductDetail from "./src/screens/ProductDetail";

export default function App() {
  const [fontsLoaded] = useFonts({
    Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    Pacifico: require("./assets/Fonts/Pacifico-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <SafeAreaView>
      {/* <Home /> */}
      {/* <Products category="smartphones" /> */}
      <ProductDetail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
