import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import * as ImagePicker from "expo-image-picker";
import { usePutImageMutation } from "../services/ecApi";
import { useGetImageQuery } from "../services/ecApi";

const Profile = () => {
  // const [image, setImage] = useState(null);

  const [putImage, result] = usePutImageMutation();

  const { data, isLoading, error, isError, refetch } = useGetImageQuery();

  const defaultImage =
    "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000";

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    // console.log("Result", result);
    // LOG DEL RESULTADO QUE DEVUELVE:
    // {
    //   "assets": [
    //     {
    //       "assetId": "C166F9F5-B5FE-4501-9531",
    //       "base64": null,
    //       "duration": null,
    //       "exif": null,
    //       "fileName": "IMG.HEIC",
    //       "fileSize": 6018901,
    //       "height": 3025,
    //       "type": "image",
    //       "uri": ""
    //       "width": 3024
    //     }
    //   ],
    //   "canceled": false,
    //   "cancelled": false
    // }

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });

      refetch();
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("No le has dado acceso a la Aplicación para acceder a tu cámara!");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync();

      console.log(result);

      if (!result.canceled) {
        await putImageProfile({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };

  return (
    <View>
      <Header title="Mi Perfil" />

      <View style={{ alignItems: "center", marginTop: 15 }}>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator
              style={{ flex: 1 }}
              size="large"
              color="#0000ff"
            />
          </View>
        ) : (
          <Image
            style={styles.imagen}
            source={{
              uri: data ? data.image : defaultImage,
            }}
          />
        )}

        <View style={styles.buttonContainer}>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => openCamera()}
            >
              <Entypo name="camera" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Cámara</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable style={styles.containerIcon} onPress={() => pickImage()}>
              <FontAwesome name="photo" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Galería de fotos</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir mapa..")}
            >
              <Feather name="map" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Mapa</Text>
          </View>
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
    marginTop: 10,
  },
  containerButton: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
    borderColor: colors.pink,
  },
  textButton: {
    marginLeft: 15,
    fontFamily: "Pacifico",
    fontSize: 20,
  },
});

export default Profile;
