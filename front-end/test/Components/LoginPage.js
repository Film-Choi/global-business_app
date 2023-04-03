import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const titleStyle = {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  };

  const subtitleStyle = {
    fontSize: 30,
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
  };
  const subtitleStyle2 = {
    fontSize: 25,
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 50,
  };
  const homeLogo = {
    width: 200,
    height: 200,
  };
  return (
    <View style={styles.container}>
      <Image
        style={homeLogo}
        source={require("../assets/crimson2positive.gif")}
        resizeMode="contain"
      />

      <Text style={titleStyle}>KOREA</Text>
      <Text style={subtitleStyle}>UNIVERSITY</Text>
      <Text style={subtitleStyle2}>SEJONG CAMPUS</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => alert("Login")}>
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
    backgroundColor: "wheat",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LoginPage;