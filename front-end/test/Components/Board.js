import React, { useReducer } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const initialState = { selectedAuthor: null };

function reducer(state, action) {
  switch (action.type) {
    case "select_author":
      return { selectedAuthor: action.payload };
    case "clear_selection":
      return initialState;
    default:
      throw new Error();
  }
}

const Board = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authors = [
    "글로벌경영",
    "디지털경영",
    "영미학전공",
    "중국학전공",
    "한국학전공",
    "독일학전공",
    "표준지식학과",
  ];

  const posts = [
    {
      id: 1,
      title: "글로벌 경영 2023-05-20 엠티 안내",
      author: "글로벌경영",
      date: "2023-05-15",
      content: "내용 1",
      viewCount: 50,
    },
    {
      id: 2,
      title: "제목 2",
      author: "한국학전공",
      date: "2023-01-02",
      content: "내용 2",
      viewCount: 70,
    },
    {
      id: 3,
      title: "제목 3",
      author: "독일학전공",
      date: "2023-01-03",
      content: "내용 3",
      viewCount: 30,
    },
    // 필요한 만큼 더 추가하세요.
  ];
  const filteredPosts = state.selectedAuthor
    ? posts.filter((post) => post.author === state.selectedAuthor)
    : posts;

  const isNewPost = (postDate) => {
    // ...isNewPost implementation
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {authors.map((author) => (
          <TouchableOpacity
            key={author}
            style={[
              styles.authorButton,
              state.selectedAuthor === author && styles.selectedAuthorButton,
            ]}
            onPress={() => dispatch({ type: "select_author", payload: author })}
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
              onPress={() => navigation.navigate("PostDetails", { post: item })}
            >
              <View style={styles.postHeader}>
                {isNewPost(item.date) && (
                  <Text style={styles.newLabel}>New</Text>
                )}
                <Text style={styles.postTitle}>{item.title}</Text>
              </View>
              <View style={styles.postAD}>
                <Text>작성자: {item.author}</Text>
                <Text>날짜: {item.date}</Text>
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
