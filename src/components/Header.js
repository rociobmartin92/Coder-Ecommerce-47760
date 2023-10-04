import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      {navigation && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 35, left: 20 }}
        >
          <AntDesign name="caretleft" size={24} color="black" />
        </Pressable>
      )}

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
