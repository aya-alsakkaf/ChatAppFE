import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import MyChat from "../../Components/MyChat";
import FromUserChat from "../../Components/FromUserChat";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";

const Chat = () => {
  const [message, setMessage] = useState({});
  return (
    <KeyboardAwareScrollView
      style={{
        padding: 10,
        flexGrow: 1,
      }}
      extraScrollHeight={10}
    >
      <View>
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
        <FromUserChat />
        <MyChat />
      </View>
      <View
        style={{
          marginBottom: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          overflow: "hidden",
        }}
      >
        <TextInput
          placeholder="Your Message"
          style={{
            width: "95%",
          }}
          multiline={true}
        />
        <Feather
          name="send"
          size={24}
          color="black"
          style={{
            margin: 10,
            position: "absolute",
            right: 0,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Chat;
