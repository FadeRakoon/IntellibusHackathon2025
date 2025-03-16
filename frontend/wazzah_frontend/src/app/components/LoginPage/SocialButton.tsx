import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface SocialButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb", // Gray-200
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#1f2937", // Gray-800
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SocialButton;
