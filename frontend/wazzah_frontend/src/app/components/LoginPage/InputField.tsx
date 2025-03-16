import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af" // Gray-400
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb", // Gray-200
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "white",
  },
  iconContainer: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    fontSize: 16,
    color: "#1f2937", // Gray-800
  },
});

export default InputField;
