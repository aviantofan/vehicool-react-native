import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Title = ({ child, resChild, onPress }) => {
  return (
    <View style={styles.t}>
      <Text style={styles.header}>{child}</Text>
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text style={styles.line}>{resChild}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  t: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#261C2C"
  },
  link: {
    marginLeft: "auto",
  },
  line: {
    textDecorationLine: "underline",
    color: "#261C2C"
  },
});

export default Title;
