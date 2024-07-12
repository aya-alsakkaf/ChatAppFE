import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NAVIGATION from "../..";
import SeachPage from "../../../Screens/Search/SeachPage";

const SearchNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.SEARCH.SEARCH} component={SeachPage} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;

const styles = StyleSheet.create({});
