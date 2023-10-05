import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Header from "../components/Header";

const MapaLoc = ({ route, navigation }) => {
  const { location } = route.params;

  console.log(JSON.stringify(location, null, " "));

  return (
    <View style={styles.container}>
      <Header title="Mi ubicación" navigation={navigation} />
      <MapView
        showsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapaLoc;
