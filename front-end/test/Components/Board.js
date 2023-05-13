import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RenderItem from "./RenderItem";
import Pagination from "./Pagination";

const posts = [
  {
    id: "1",
    title: "2022-1학기 MT",
    author: "작성자1",
    createdAt: "2023-04-04T13:00:00Z",
    content: "내용이하 생략",
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
      <View style={styles.paging}>
        <Pagination defaultCurrent={1} total={50} /> {/* Pagination 추가 */}
      </View>
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
  paging: { textAlign: "center", marginBottom: 10 },
});

export default Board;
