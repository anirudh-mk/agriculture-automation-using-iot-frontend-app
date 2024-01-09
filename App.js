import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    height:80,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    background: '#fff'
  },
}

const Screen = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Screen.Navigator 
          initialRouteName="welcomeScreen"
          screenOptions={ screenOptions } 
        >
        <Screen.Screen name="welcomeScreen" component={ WelcomeScreen } />
        <Screen.Screen name="homeScreen" component={ HomeScreen } />
        <Screen.Screen name="mainScreen" component={ MainScreen }/>
        <Screen.Screen name="userScreen" component={ UserScreen }/>
      </Screen.Navigator>
    </NavigationContainer>
  );
};

export default App;