import React from "react";
import { View, StyleSheet } from "react-native";
import TestimonialCarousel from "./TestimonialCarousel";
import LoginForm from "./LoginForm";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TestimonialCarousel />
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
});

export default LoginScreen;
