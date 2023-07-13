import React, { useReducer, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const initialState = { selectedAuthor: null, posts: [], authors: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "set_posts":
      return {
        ...state,
        posts: action.payload,
        authors: action.authors,
      };
    case "select_author":
      return {
        ...state,
        selectedAuthor: action.payload,
      };
    case "clear_selection":
      return {
        ...state,
        selectedAuthor: null,
      };
    default:
      return state;
  }
};

const Board = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPosts();
    console.log("ㅁㄴㅇㄹ")
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:80/show/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();

      const authors = Array.from(new Set(data.map((post) => post.writer)));

      dispatch({ type: "set_posts", payload: data, authors: authors });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


  const filteredPosts = state.selectedAuthor
    ? state.posts.filter((post) => post.department === state.selectedAuthor)
    : state.posts;

  const isNewPost = (postDate) => {
    // ...isNewPost implementation
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {state.authors.map((author) => (
          <TouchableOpacity
            key={author}
            style={[
              styles.authorButton,
              state.selectedAuthor === author && styles.selectedAuthorButton,
            ]}
            onPress={() =>
              dispatch({ type: "select_author", payload: author })
            }
          >
            <Text
              style={
                state.selectedAuthor === author && styles.selectedAuthorText
              }
            >
              {author}

            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.authorButton,
            !state.selectedAuthor && styles.selectedAuthorButton,
          ]}
          onPress={() => dispatch({ type: "clear_selection" })}
        >
          <Text style={!state.selectedAuthor && styles.selectedAuthorText}>
            모든 게시물 보기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postContainer}>
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.post}
              onPress={() =>
                navigation.navigate("PostDetails", { post: item })
              }
            >
              <View style={styles.postHeader}>
                {isNewPost(item.uploadTime) && (
                  <Text style={styles.newLabel}>New</Text>
                )}
                <Text style={styles.postTitle}>{item.title}</Text>
              </View>
              <View style={styles.postAD}>
                <Text>작성자: {item.writer}</Text>
                <Text>날짜: {item.uploadTime}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  authorButton: {
    margin: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: "fff",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
  },
  selectedAuthorButton: {
    backgroundColor: "skyblue",
  },
  selectedAuthorText: {
    color: "white",
  },
  postContainer: {
    width: "80%",
  },
  postAD: { flex: 1, flexDirection: "row" },
  post: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 5,
  },
  postHeader: {
    flex: 1,
    flexDirection: "row",
    textAlignVertical: "center",
  },
  postTitle: {
    fontSize: 20,
  },
  newLabel: {
    color: "red",
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Board;
