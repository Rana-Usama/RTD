import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SwatVideoScreen from './app/screens/SwatVideoScreen';
import MyCourseScreen from "./app/screens/MyCourseScreen"
import MainVideoScreen from './app/screens/MainVideoScreen'
import CourseOverviewScreen from './app/screens/CourseOverviewScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="CourseOverviewScreen">
        <Stack.Screen name="SwatVideoScreen" component={SwatVideoScreen} />
        {/* <Stack.Screen name="MyCourseScreen" component={MyCourseScreen} /> */}
        {/* <Stack.Screen name="MainVideoScreen" component={MainVideoScreen} /> */}
        {/* <Stack.Screen name="CourseOverviewScreen" component={CourseOverviewScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}