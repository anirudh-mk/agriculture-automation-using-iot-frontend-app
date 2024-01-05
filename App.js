
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={HomeScreen} />
        <Tab.Screen name="Screen2" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;