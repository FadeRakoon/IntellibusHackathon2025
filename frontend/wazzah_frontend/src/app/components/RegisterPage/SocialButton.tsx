import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface SocialButtonProps {
  icon: string;
  text: string;
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer} />
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
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: "#cbd5e1",
    borderRadius: 12,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#333",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Inter",
  },
});

export default SocialButton;
