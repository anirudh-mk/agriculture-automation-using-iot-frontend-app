
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import StatisticScreen from './screens/StatisticScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
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
  }
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="home" color={color} size={focused?30:26} />
            ),
          }}
        />
        <Tab.Screen
          name="statistics"
          component={StatisticScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name='finance' color={color} size={focused?30:26}/>
            ),
          }}
        />
        <Tab.Screen 
          name="user" 
          component={UserScreen} 
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="account" color={color} size={focused?30:26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;