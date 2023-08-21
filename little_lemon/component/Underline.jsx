import React from "react";
import { View, StyleSheet } from "react-native";

const Underline = ({ color, height }) => {
  return (
    <View
      style={[styles.underline, { backgroundColor: color, height: height }]}
    />
  );
};

const styles = StyleSheet.create({
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default Underline;
