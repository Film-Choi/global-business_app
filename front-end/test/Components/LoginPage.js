import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";



export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async (username, password) => {
    const url = "'http://localhost:19006";
    const data = { username, password };
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    } else {
      console.error("HTTP error: " + response.status);
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
      <TouchableOpacity style={styles.button} onPress={() => {
        console.log(username);
        console.log(password);
        login(username, password);
      }}>
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
    marginBottom: 50,
  },
  homeLogo: {
    width: 200,
    height: 200,
  },
});