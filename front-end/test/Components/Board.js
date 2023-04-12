import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RenderItem from "./RenderItem";

const posts = [
  {
    id: "1",
    title: "2022-1학기 MT",
    author: "작성자1",
    content:
      "ㅇㄴㅁㅇㄹ어리마ㅓㅏㅣ어ㅣ라머라ㅣㅇㅁ너라ㅣ러나ㅣ러ㅏㅣㄹ널미라ㅓㄴ;라얼마러나;ㄴ어ㅏㄹ어라ㅣ",
    viewcount: 111,
  },
  {
    id: "2",
    title: "제목2",
    author: "작성자2",
    content: "내용2",
    createdAt: "2023-04-04T13:00:00Z",
    viewcount: 111,
  },
];

const Board = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.board}>
      <Text style={styles.title}>공지사항</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <RenderItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  board: { flex: 1, backgroundColor: "white" },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
});

export default Board;
