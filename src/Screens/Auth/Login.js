import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="Phone Number"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          width: "100wv",
        }}
        onChangeText={(text) => setUserInfo({ ...userInfo, phoneNumber: text })}
      />

      <TextInput
        placeholder="Password"
        style={{
          borderColor: "black",
          marginTop: 10,
          borderWidth: 1,
          padding: 10,
          width: "100wv",
          borderRadius: 10,
        }}
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          marginTop: 10,
          width: "100wv",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => console.log(userInfo)}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>

      <Text>
        Don't have an account?{" "}
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.AUTH.REGISTER)}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;
