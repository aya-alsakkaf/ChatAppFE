import { View } from "react-native";
import React, { useEffect } from "react";
import ChatCard from "../../Components/ChatCard";
import { useQuery } from "@tanstack/react-query";
import { getAllChatRooms } from "../../api/ChatRooms";
import { socket } from "../../api";
import { useFocusEffect } from "@react-navigation/native";

const AllChats = () => {
  const { data, refetch } = useQuery({
    queryKey: ["GetAllChats"],
    queryFn: getAllChatRooms,
  });

  console.log("chats", data);

  useEffect(() => {
    socket.on("message", (data) => {
      refetch();
    });
  }, []);
  const chats = data?.map((chat) => {
    return (
      <ChatCard
        key={chat._id}
        image={
          "https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"
        }
        chatname={chat?.participants[0]?.fullName}
        message={chat?.messages[chat?.messages?.length - 1]?.content}
        time={chat?.messages[chat?.messages?.length - 1]?.createdAt}
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
