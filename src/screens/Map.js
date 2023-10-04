import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Header from "../components/Header";

const Map = ({ route, navigation }) => {
  const { location } = route.params;

  console.log("LOCATION IN MAP coords", location.coords);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Mapa" />
      <MapView
        pointerEvents={true}
        showsUserLocation={true}
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}

        // showsPointsOfInterest={false}
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

export default Map;
