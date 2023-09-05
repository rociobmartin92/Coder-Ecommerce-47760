import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "./src/theme/colors";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
