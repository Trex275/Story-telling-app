import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import StoryScreen from "../Screens/StoryScreen";
import Feed from "../Screens/Feed"

const Stack = createStackNavigator();
 
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
  }}
    >
      <Stack.Screen name = "Home" component = {Feed}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
