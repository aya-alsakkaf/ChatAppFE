import { View } from "react-native";
import React from "react";
import ChatCard from "../../Components/ChatCard";
import { useQuery } from "@tanstack/react-query";
import { getAllChatRooms } from "../../api/ChatRooms";

const AllChats = () => {
  const { data } = useQuery({
    queryKey: ["GetAllChats"],
    queryFn: getAllChatRooms,
  });

  console.log("chats", data);

  const chats = data?.map((chat) => {
    return (
      <ChatCard
        key={chat._id}
        image={
          "https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"
        }
        chatname={chat?.participants[0]?.fullName}
        message={chat?.messages[0]?.content}
        time={chat?.messages[0]?.createdAt}
        chatID={chat?._id}
        toID={chat?.participants[0]?._id}
      />
    );
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {chats}
    </View>
  );
};

export default AllChats;
