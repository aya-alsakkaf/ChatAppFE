import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NAVIGATION from "..";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={NAVIGATION.HOME.INDEX} component={HomeNavigation} />
      <Tab.Screen name={NAVIGATION.AUTH.INDEX} component={AuthNavigation} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
