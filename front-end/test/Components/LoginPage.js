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
    const data = {
      studentId: username,
      phoneNum: password
    };

    try {
      const response = await fetch("http://127.0.0.1:80/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json(); // 서버 응답에서 데이터 추출
        if (result.status === "success") {
          navigation.navigate("RootStack");
        } else {
          console.log("로그인 실패");
        }
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.log("오류 발생:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.homeLogo}
        source={require("../assets/crimson2positive.gif")}
        resizeMode="contain"
      />
      <br></br>
      <br></br>
      <Text style={styles.subtitleStyle2}>KOREA UNIVERSITY</Text>
      <Text style={styles.subtitleStyle2}>SEJONG CAMPUS</Text>
      <br></br>
      <br></br>
      <Text style={styles.subtitleStyle2}>GLOBAL BUSINESS</Text>
      <br></br>
      <br></br>
      <br></br>
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
    backgroundColor: "brown",
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
    marginBottom: 0,
  },
  homeLogo: {
    width: 150,
    height: 150,
  },
});
