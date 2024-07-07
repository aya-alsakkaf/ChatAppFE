import { StyleSheet, View } from "react-native";
import React from "react";
import ChatCard from "../../Components/ChatCard";

const AllChats = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ChatCard
        image={
          "https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"
        }
        chatname={"John Doe"}
        message={"Hello, how are you?"}
        time={"10:00 AM"}
      />
    </View>
  );
};

export default AllChats;
