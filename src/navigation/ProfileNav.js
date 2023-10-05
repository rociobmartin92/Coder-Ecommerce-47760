import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

import Map from "../screens/Map";
import MapaLoc from "../screens/MapaLoc";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Profile} name="profile" />
      <Stack.Screen component={MapaLoc} name="mapaLoc" />
    </Stack.Navigator>
  );
};

export default ProfileNav;
