import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage({ setLoggedIn }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const login = async () => {
    // 로그인 로직을 구현합니다.
    // 실제 서버와 통신하여 로그인을 처리해야 합니다.

    // 임시로 아이디와 비밀번호가 "aaa"와 "bbb"인 경우에만 로그인 성공으로 가정합니다.
    if (username === "aaa" && password === "bbb") {
      // 로그인 성공 시 화면 이동을 처리합니다.
      setLoggedIn(true);
      navigation.navigate("CalendarScreen");
    } else {
      console.log("로그인 실패");
    }
  };

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
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 50,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "wheat",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
