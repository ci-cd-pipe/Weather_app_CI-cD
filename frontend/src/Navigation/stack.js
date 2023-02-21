import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from '../Screens/Home';
import Signup from "../Screens/Signup";
import Location from "../Screens/Location";
import Forecast from "../Screens/Forecast";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Forecast" component={Forecast} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
