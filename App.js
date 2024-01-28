import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import FarmScreen from "./screens/FarmScreen";

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: "#fff",
  },
};

const Screen = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Screen.Navigator
          initialRouteName="welcomeScreen"
          screenOptions={screenOptions}
        >
          <Screen.Screen name="welcomeScreen" component={WelcomeScreen} />
          <Screen.Screen name="loginScreen" component={LoginScreen} />
          <Screen.Screen name="mainScreen" component={MainScreen} />
          <Screen.Screen name="farmScreen" component={FarmScreen} />
        </Screen.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
