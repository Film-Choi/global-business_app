import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Restaurant = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://sejong.korea.ac.kr/dext5editordata/20230515_093347368_80269.jpeg",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});

export default Restaurant;
