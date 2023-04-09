import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";



export default function CreatorPage() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.homeLogo}
        source={require("../assets/crimson2positive.gif")}
        resizeMode="contain"
      />

      <Text style={styles.titleStyle}>KOREA UNIVERSITY</Text>
      <Text style={styles.subtitleStyle}>SEJONG CAMPUS</Text>
      <Text style={styles.subtitleStyle2}>GLOBAL BUSINESS</Text>

      <text>문의사항/건의사항</text>
      <text>글로벌비즈니스대학 학생회</text>
      <text>kusgolbalbusiness@gmail.com</text>

      <text>제작/개발</text>
      <text>2023 글로벌비즈니스대학 학생회장 이서준</text>
      <text>컴퓨터융합소프트웨어 김기욱</text>
      <text>컴퓨터융합소프트웨어 최현준</text>
      <text>컴퓨터융합소프트웨어 김기환</text>
      <text>컴퓨터융합소프트웨어 유창호</text>

      <text>기여</text>
      <text>총무팀 홍길동</text>
      <text>총무팀 홍길동</text>

      <text>지원</text>
      <text>글로벌비즈니스대학 행정실 홍길동</text>

      <text>개발자 연락처</text>
      <text>rlghks131@korea.ac.kr</text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  },
  text: {
    fontSize: 50,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
  },
  titleStyle: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  },
  subtitleStyle: {
    fontSize: 40,
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
  },
  subtitleStyle2: {
    fontSize: 25,
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 50,
  },
  homeLogo: {
    width: 200,
    height: 200,
  },
});