import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screen/SignIn";
import Register from "../screen/Register";
import HomeScreen from "../screen/HomeScreen";
import SubScreen from "../screen/SubScreen";
import DetailsScreen from "../screen/DetailsScreen";
import { WebView } from "react-native-webview";
import { View } from "native-base";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SubScreen" component={SubScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
