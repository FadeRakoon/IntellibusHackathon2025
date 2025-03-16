import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "./InputField";
import DividerWithText from "./DividerWithText";
import SocialButton from "./SocialButton";

// This would normally be imported from a vector icons library
const UserIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: "#6366f1",
      borderRadius: 10,
    }}
  />
);

const LockIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: "#6366f1",
      borderRadius: 10,
    }}
  />
);

const GoogleIcon = () => (
  <View
    style={{
      width: 24,
      height: 24,
      backgroundColor: "#EA4335",
      borderRadius: 12,
    }}
  />
);

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login with:", username, password);
    // Implement login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Implement Google login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.wazzah}>WAZZAH!</Text>
        </View>

        <Text style={styles.welcomeText}>Welcome Back</Text>

        <View style={styles.form}>
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            icon={<UserIcon />}
          />

          <InputField
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            icon={<LockIcon />}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <DividerWithText text="or" />

          <SocialButton
            text="Continue with Google"
            icon={<GoogleIcon />}
            onPress={handleGoogleLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 24,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  wazzah: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6366f1", // Indigo-500
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1f2937", // Gray-800
    marginBottom: 24,
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#6366f1", // Indigo-500
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginForm;
