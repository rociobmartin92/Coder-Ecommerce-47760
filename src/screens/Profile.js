import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View>
      <Header title="Mi Perfil" />
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000",
          }}
        />

        <View>
          <Pressable onPress={() => console.log("abrir camara..")}>
            <Entypo name="camera" size={24} color="black" />
          </Pressable>

          <Pressable onPress={() => console.log("abrir galería de fotos..")}>
            <FontAwesome name="photo" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Profile;
