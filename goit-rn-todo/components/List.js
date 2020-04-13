import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Item = ({ id, title, priority, onLongPress }) => {
  const backgroundColor = priority === 0 ? "#f74242" : "#42f773";

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <TouchableOpacity activeOpacity={0.1} onLongPress={() => onLongPress(id, title)}>
        <Text style={styles.styleListText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function ({ data, onLongPress }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} onLongPress={onLongPress} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 15,
    marginBottom: 0,
    marginTop: 20,
    // height: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  styleListText: {
    textAlignVertical: "center",
  },
});
