import {
  Pressable,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MyChat from "../../Components/MyChat";
import FromUserChat from "../../Components/FromUserChat";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { getChatRoombyID } from "../../api/ChatRooms";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendMessage } from "../../api/Message";

const Chat = ({ route }) => {
  const [message, setMessage] = useState({
    receiverID: route.params.toID,
    chatRoomID: route.params.id,
  });
  const { data } = useQuery({
    queryKey: ["getChatRoomByID", route.params.id],
    queryFn: () => getChatRoombyID(route.params.id),
  });

  const messageList = data?.messages?.map((message) => {
    if (message?.from === route.params.toID) {
      return <FromUserChat key={message._id} message={message.content} />;
    } else {
      return <MyChat key={message._id} message={message.content} />;
    }
  });

  const { mutate } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: () => sendMessage(message),
    onSuccess: () => {
      alert("Message Sent");
    },
  });
  return (
    <KeyboardAwareScrollView
      style={{
        padding: 10,
        flexGrow: 1,
      }}
      extraScrollHeight={10}
    >
      <View>{messageList}</View>
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
          onChangeText={(text) => setMessage({ ...message, message: text })}
          multiline={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: 50,
            padding: 10,
          }}
          onPress={() => {
            mutate();
          }}
        >
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
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Chat;
