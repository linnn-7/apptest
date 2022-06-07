import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import EventsSreen from './Screen/EventScreen';
import ContactSreen from './Screen/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Events" component={EventsSreen}/>
      <Tab.Screen name="Contact" component={ContactSreen}/>
     </Tab.Navigator>
    </NavigationContainer>
  );
}
