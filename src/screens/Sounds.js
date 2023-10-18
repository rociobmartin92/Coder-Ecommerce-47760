import { SafeAreaView, Pressable, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
// import { useIsFocused } from "@react-navigation/native";

const Sounds = ({ navigation }) => {
  const song = require("../../assets/Sounds/song.mp3");

  const [sound, setSound] = useState();
  //   const focus = useIsFocused();
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(song);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 50, left: 20 }}
      >
        <AntDesign name="caretleft" size={24} color="black" />
      </Pressable>
      <Image
        style={styles.image}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/007/544/445/non_2x/record-player-hand-drawn-icon-of-turntable-vector.jpg",
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Sounds;
