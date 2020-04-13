import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import TextInput from "./components/TextInput";
import List from "./components/List";
import shortid from "shortid";

export default function App() {
  const [todos, setTodos] = React.useState([
  ]);

  return (
    <View style={styles.container}>
      <TextInput
        onSelect={({ title, priority }) => {
          setTodos([{ id: shortid.generate(), title, priority }, ...todos]);
        }}
      />
      <List
        data={todos}
        onLongPress={(id, title) => {
          Alert.alert("Delete?", title, [
            {
              text: "yes",
              onPress() {
                setTodos(
                  todos.filter((item) => {
                    return item.id !== id;
                  })
                );
              },
            },
            {
              text: "no",
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textInput: {
    flexGrow: 1,
  },
});
