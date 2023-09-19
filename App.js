import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";

import { useFonts } from "expo-font";
import ProductDetail from "./src/screens/ProductDetail";
import RootNavigation from "./src/navigation/RootNavigation";
import TabNav from "./src/navigation/TabNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    Pacifico: require("./assets/Fonts/Pacifico-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
