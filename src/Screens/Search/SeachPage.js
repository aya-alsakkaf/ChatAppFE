import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ChatCard from "../../Components/ChatCard";
import { useMutation } from "@tanstack/react-query";
import { search } from "../../api/User";

const SeachPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["search"],
    mutationFn: () => search(searchQuery),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  console.log(data);

  console.log(isPending);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "90%",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Search for a friend"
          onChangeText={(text) => {
            setSearchQuery({ ...searchQuery, phoneNumber: text });
          }}
        />
        <Pressable
          onPress={() => {
            mutate();
          }}
        >
          <Text>Search</Text>
        </Pressable>
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        {data ? (
          <ChatCard
            image={
              "https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"
            }
            chatname={data?.fullName}
            message={""}
            time={""}
            id={data?._id}
          />
        ) : null}
      </View>
    </View>
  );
};

export default SeachPage;

const styles = StyleSheet.create({});
