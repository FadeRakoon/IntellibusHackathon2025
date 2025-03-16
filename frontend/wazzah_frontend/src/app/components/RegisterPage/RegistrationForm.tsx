import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DividerWithText from "./DividerWithText";
import SocialButton from "./SocialButton";

const RegistrationForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleRegister = () => {
    console.log("Register with:", { username, password, email });
    // Implement registration logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>WAZZAH!</Text>
        </View>
      </View>

      <Text style={styles.title}>Enter your Information</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <View style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="New Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <View style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <View style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <DividerWithText text="or" />

        <SocialButton
          icon="google"
          text="Continue with Google"
          onPress={() => console.log("Google login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  logoContainer: {
    backgroundColor: "#6366f1", // Indigo color
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
    fontFamily: "Inter",
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    marginBottom: 16,
    height: 50,
  },
  inputIconContainer: {
    padding: 12,
  },
  inputIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#cbd5e1",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 8,
    fontFamily: "Inter",
  },
  registerButton: {
    backgroundColor: "#6366f1", // Indigo color
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Inter",
  },
});

export default RegistrationForm;
