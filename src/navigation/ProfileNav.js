import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

import MapaLoc from "../screens/MapaLoc";
import Sounds from "../screens/Sounds";

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
      <Stack.Screen component={Sounds} name="sounds" />
    </Stack.Navigator>
  );
};

export default ProfileNav;
