import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import BuscarVoo from "./screens/BuscarVoo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={ { headerShown: false } }
      >
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="BuscarVoo" component={ BuscarVoo } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
