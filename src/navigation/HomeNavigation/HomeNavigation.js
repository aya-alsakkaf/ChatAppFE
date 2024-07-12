import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NAVIGATION from "..";
import AllChats from "../../Screens/Home/AllChats";
import Chat from "../../Screens/Home/Chat";

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.HOME.HOME} component={AllChats} />
      <Stack.Screen name={NAVIGATION.HOME.CHAT} component={Chat} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
