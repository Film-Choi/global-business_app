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
      <View style={styles.containers}>
        <Text style={styles.WButton}>기타 문의사항 및 어플 건의사항</Text>
        <Text style={styles.theader}>-문의 사항 / 건의 사항</Text>

        <Text style={styles.createText}>글로벌비즈니스대학 학생회</Text>
        <Text style={styles.createText}>kusgolbalbusiness@gmail.com</Text>
      </View>
      <View style={styles.containers}>
        <Text style={styles.WButton}>어플 개발에 도움을 주신 분</Text>
        <Text style={styles.theader}>-제작/개발</Text>
        <Text style={styles.createText}>
          2023 글로벌비즈니스대학 학생회장 이서준
        </Text>
        <Text style={styles.createText}>컴퓨터융합소프트웨어 김기욱</Text>
        <Text style={styles.createText}>컴퓨터융합소프트웨어 최현준</Text>
        <Text style={styles.createText}>컴퓨터융합소프트웨어 김기환</Text>
        <Text style={styles.createText}>컴퓨터융합소프트웨어 유창호</Text>

        <Text style={styles.theader}>-기여</Text>
        <Text style={styles.createText}>총무팀 홍길동</Text>
        <Text style={styles.createText}>총무팀 홍길동</Text>

        <Text style={styles.theader}>-지원</Text>
        <Text style={styles.createText}>글로벌비즈니스대학 행정실 홍길동</Text>

        <Text style={styles.theader}>-개발자 연락처</Text>
        <Text style={styles.createText}>rlghks131@korea.ac.kr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeLogo: {
    height: 100,
    width: 100,
    marginTop: 70,
    marginBottom: 10,
  },
  WButton: {
    backgroundColor: "white",
    textAlign: "center",
    width: "100%",
    padding: 5,
    borderRadius: 5,
    color: "gray",
    marginVertical: 20,
  },
  theader: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 10,
    color: "white",
  },
  createText: {
    color: "white",
    marginVertical: 1,
    marginLeft: 25,
  },
  containers: {
    width: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "brown",
  },
});
