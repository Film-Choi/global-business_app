import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const RenderItem = ({ item }) => {
  const isPostNew = (createdAt) => {
    const now = moment();
    const postDate = moment(createdAt);
    return now.diff(postDate, "hours") < 24;
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetails", { post: item })}
    >
      <View
        style={{
          marginHorizontal: 40,
          paddingVertical: 10,
          borderColor: "#C9D4D1",
          borderBottomWidth: 1,
          borderStyle: "solid",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            {item.title}
          </Text>
          {isPostNew(item.createdAt) && (
            <Text style={{ color: "red", fontWeight: "bold" }}>N</Text>
          )}
        </View>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          {moment(item.createdAt).format("YYYY-MM-DD")} 작성자: {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
