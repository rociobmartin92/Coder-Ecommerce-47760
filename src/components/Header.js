import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}></Pressable>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginTop: 10,
  },
  headerText: {
    fontSize: 35,

    color: colors.heavyBlue,
    fontFamily: "Dancing",
  },
});

export default Header;
