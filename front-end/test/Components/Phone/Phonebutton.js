import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { phoneNumbers } from "./Phonenumbers";
const PhoneButton = () => {
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.buttonStyle}>
      <View style={styles.PTitle}>
        <Text style={styles.PhoneTitle}>교내 행정실</Text>
        <Text style={styles.PhoneTitle}>전화번호</Text>
      </View>
      {phoneNumbers.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(`tel:${phoneNumbers}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {item.name} - {item.phoneNumber}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: { alignItems: "center", textAlign: "center" },
  PTitle: {
    margin: 20,
  },
  PhoneTitle: {
    fontSize: 30,
    marginTop: 20,
  },
  button: {
    padding: 10,
    width: "90%",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PhoneButton;
