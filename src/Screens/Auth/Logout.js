import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { deleteItemAsync } from "expo-secure-store";
import UserContext from "../../Context/UserContext";

const Logout = () => {
  const { setIsAuthenticated } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          deleteItemAsync("token");
          setIsAuthenticated(false);
        }}
        style={{
          padding: 10,
          backgroundColor: "red",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
