import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import StatisticScreen from './screens/StatisticScreen';

import colors from './utils/Colors';
import WelcomeScreen from './screens/WelcomeScreen';

import { createStackNavigator } from '@react-navigation/stack';



// const Tab = createBottomTabNavigator();
// const screenOptions = {
//   tabBarShowLabel:false,
//   headerShown:false,
//   tabBarStyle:{
//     position:"absolute",
//     bottom:0,
//     right:0,
//     left:0,
//     height:80,
//     borderTopLeftRadius:10,
//     borderTopRightRadius:10,
//     background: '#fff'
//   },
// }

const Screen = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
      <Screen.Navigator initialRouteName="welcomeScreen">
        <Screen.Screen name="welcomeScreen" component={WelcomeScreen} />
        <Screen.Screen name="homeScreen" component={HomeScreen} />
      </Screen.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    //   <Tab.Navigator 
    //     screenOptions={ screenOptions } 
    //     initialRouteName="Home"
    //   >
    //     <Tab.Screen 
    //       name="Home" 
    //       component={ HomeScreen } 
    //       options={{
    //         tabBarIcon: ({ focused }) => (
    //           <MaterialCommunityIcons 
    //           name="home" 
    //           color={ focused? colors.primary: colors.gray } 
    //           size={ focused? 30: 26 } />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Statistics"
    //       component={ StatisticScreen }
    //       options={{
    //         tabBarIcon: ({ focused }) => (
    //           <MaterialCommunityIcons 
    //           name='finance' 
    //           color={ focused? colors.primary: colors.gray } 
    //           size={ focused? 30: 26 }/>
    //         ),
    //       }}
    //     />
    //     <Tab.Screen 
    //       name="User" 
    //       component={ UserScreen } 
    //       options={{
    //         tabBarIcon: ({ focused }) => (
    //           <MaterialCommunityIcons 
    //           name="account" 
    //           color={ focused? colors.primary: colors.gray } 
    //           size={ focused? 30: 26} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;