import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const PostDetails = ({ route, navigation }) => {
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>뒤로가기</Text>
      </TouchableOpacity>
      <View style={styles.postHeader}>
        <View style={styles.postAD}>
          <Text style={styles.authorText}>작성자: {post.author}</Text>
          <Text style={styles.dateText}>날짜: {post.date}</Text>
        </View>
        <Text style={styles.contentView}>{post.viewCount}view</Text>
      </View>
      <View style={styles.contentText}>
        <Text style={styles.contentText}>{post.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  goBackText: {
    color: "blue",
    marginBottom: 10,
  },
  postHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: "gray",
  },
  postAD: {
    marginLeft: 10,
  },
  contentView: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  authorText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    marginBottom: 5,
  },
  contentText: { textAlign: "center", fontSize: 20, marginTop: 20 },
});

export default PostDetails;
