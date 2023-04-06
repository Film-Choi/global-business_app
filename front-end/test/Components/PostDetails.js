import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostDetails = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 40,
  },
  content: {
    fontSize: 25,
  },
});

export default PostDetails;
