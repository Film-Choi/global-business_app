import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
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
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {isPostNew(item.createdAt) && (
            <Text style={styles.newIndicator}>N</Text>
          )}
        </View>
        <Text style={styles.details}>
          {moment(item.createdAt).format("YYYY-MM-DD")} 작성자: {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#C9D4D1",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  newIndicator: {
    color: "red",
    fontWeight: "bold",
  },
  details: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default RenderItem;
