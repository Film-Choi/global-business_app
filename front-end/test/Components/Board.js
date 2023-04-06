import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const posts = [
  {
    id: "1",
    title: "2022-1학기 MT",
    author: "작성자1",
    content: "내용1",
    createdAt: "2023-04-03T12:00:00Z",
  },
  {
    id: "2",
    title: "제목2",
    author: "작성자2",
    content: "내용2",
    createdAt: "2023-04-04T13:00:00Z",
  },
  // ... 기타 게시글
];

const isPostNew = (createdAt) => {
  const now = moment();
  const postDate = moment(createdAt);
  return now.diff(postDate, "hours") < 24;
};

const Board = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetails", { post: item })}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
        {isPostNew(item.createdAt) && (
          <Text style={{ color: "red", fontWeight: "bold" }}>New</Text>
        )}
      </View>
      <Text>
        {moment(item.createdAt).format("YYYY-MM-DD")} 작성자: {item.author}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>공지사항</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Board;
