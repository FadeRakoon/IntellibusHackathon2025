import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  text: {
    color: "#64748b",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Inter",
  },
});

export default DividerWithText;
