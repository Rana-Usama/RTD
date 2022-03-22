import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SwatVideoScreen from './app/screens/SwatVideoScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SwatVideoScreen">
        <Stack.Screen name="SwatVideoScreen" component={SwatVideoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}