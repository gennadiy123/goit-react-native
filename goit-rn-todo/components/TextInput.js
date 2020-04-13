import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";
import PriorityAlert from "./PriorityAlert";

export default function OnTextInput({ onSelect }) {
  const [value, setValue] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          PriorityAlert(value, onSelect);
          setValue("");
        }}
      >
        <Text>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
  },

  textInput: {
    width: 260,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 15,
    borderRadius: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
});
