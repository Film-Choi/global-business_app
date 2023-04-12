import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostDetails = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.author}>{post.createdAt}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.viewcount}>{post.viewcount} view</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBar: {
    marginVertical: 10,
    paddingBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
  content: {
    fontSize: 15,
  },
});

export default PostDetails;
