import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const BusSchedule = () => {
  const weekdaysData = [
    { id: "0", school: "학교", station: "역뒤", note: "비고" },
    { id: "1", school: "", station: "08:30", note: "영진관광" },
    { id: "2", school: "", station: "08:40", note: "영진관광" },
    { id: "3", school: "", station: "08:50", note: "영진관광" },
    { id: "4", school: "08:50", station: "09:00", note: "영진관광" },
    { id: "5", school: "09:10", station: "09:20", note: "영진관광" },
    { id: "6", school: "09:30", station: "09:40", note: "영진관광" },
    { id: "7", school: "09:40", station: "09:50", note: "영진관광" },
    { id: "8", school: "09:50", station: "10:00", note: "영진관광" },
    { id: "9", school: "10:10", station: "10:20", note: "영진관광" },
    { id: "10", school: "10:30", station: "10:40", note: "영진관광" },
    { id: "11", school: "10:40", station: "10:50", note: "영진관광" },
    { id: "12", school: "11:00", station: "11:10", note: "영진관광" },
    { id: "13", school: "11:20", station: "11:30", note: "영진관광" },
    { id: "14", school: "11:40", station: "11:50", note: "영진관광" },
    { id: "15", school: "12:10", station: "12:20", note: "영진관광" },
    { id: "16", school: "12:30", station: "12:40", note: "영진관광" },
    { id: "17", school: "12:40", station: "12:50", note: "영진관광" },
    { id: "18", school: "13:10", station: "13:20", note: "영진관광" },
    { id: "19", school: "13:30", station: "13:40", note: "영진관광" },
    { id: "20", school: "13:50", station: "14:00", note: "영진관광" },
    { id: "21", school: "14:10", station: "14:20", note: "영진관광" },
    { id: "22", school: "14:30", station: "14:40", note: "영진관광" },
    { id: "23", school: "15:00", station: "15:10", note: "영진관광" },
    { id: "24", school: "15:30", station: "15:40", note: "영진관광" },
    { id: "25", school: "15:50", station: "16:00", note: "영진관광" },
    { id: "26", school: "16:10", station: "16:20", note: "영진관광" },
    { id: "27", school: "16:30", station: "16:40", note: "영진관광" },
    { id: "28", school: "16:50", station: "17:00", note: "영진관광" },
    { id: "29", school: "17:10", station: "17:20", note: "영진관광" },
    { id: "30", school: "17:25", station: "17:35", note: "영진관광" },
    { id: "31", school: "17:40", station: "17:50", note: "영진관광" },
    { id: "32", school: "18:00", station: "18:10", note: "영진관광" },
    { id: "33", school: "18:30", station: "18:40", note: "영진관광" },
    { id: "34", school: "19:00", station: "19:10", note: "영진관광" },
    { id: "35", school: "19:30", station: "19:40", note: "영진관광" },
    { id: "36", school: "20:00", station: "20:10", note: "영진관광" },
    { id: "37", school: "20:30", station: "20:40", note: "영진관광" },
    { id: "38", school: "20:50", station: "21:00", note: "영진관광" },
    { id: "39", school: "21:20", station: "21:30", note: "영진관광" },
    { id: "40", school: "21:40", station: "21:50", note: "영진관광" },
    // 이곳에 다른 요일 데이터를 추가...
  ];
  const sundayData = [
    { id: "0", school: "학교", station: "역뒤", note: "비고" },
    { id: "1", school: "", station: "16:40", note: "영진관광" },
    { id: "2", school: "17:00", station: "17:10", note: "영진관광" },
    { id: "3", school: "17:30", station: "17:40", note: "영진관광" },
    { id: "4", school: "18:20", station: "18:30", note: "영진관광" },
    { id: "5", school: "19:00", station: "19:10", note: "영진관광" },
    { id: "6", school: "19:30", station: "19:40", note: "영진관광" },
    { id: "7", school: "20:10", station: "20:20", note: "영진관광" },
    { id: "8", school: "21:00", station: "21:10", note: "영진관광" },
    // 이곳에 일요일 데이터를 추가...
  ];

  const renderItem = ({ item }) => {
    const backgroundColor = parseInt(item.id) >= 34 ? "#ffb39b" : "transparent";

    return (
      <View style={[styles.item, { backgroundColor }]}>
        <Text style={styles.text}>{item.id}</Text>
        <Text style={styles.text}>{item.school}</Text>
        <Text style={styles.text}>{item.station}</Text>
        <Text style={styles.text}>{item.note}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.busChart}>
        <Text style={styles.title}>월요일~금요일</Text>
        <FlatList
          data={weekdaysData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.busChart}>
        <Text style={styles.title}>일요일</Text>
        <FlatList
          data={sundayData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.fdayBus}>
          【금요일은 NO. 34, 35, 36, 37, 38, 39, 40 운휴함.】
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 22,
    paddingBottom: 80,
    justifyContent: "space-around",
  },
  busChart: {
    width: "45%",
  },
  item: {
    padding: 10,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // 항목들이 같은 높이에 위치하도록
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    flex: 1, // 항목들이 동일한 너비를 가지도록
    textAlign: "center", // 텍스트를 중앙에 위치시킴
  },

  fdayBus: {
    textAlign: "center",
    fontSize: 15,
    backgroundColor: "#ffb39b",
    padding: 10,
  },
  itemRed: {
    padding: 10,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "#ffb39b", // 배경색을 빨간색으로 설정
  },
});

export default BusSchedule;
