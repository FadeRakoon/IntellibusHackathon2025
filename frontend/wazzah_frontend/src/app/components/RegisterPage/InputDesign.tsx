import * as React from "react";
import { View, StyleSheet } from "react-native";
import TestimonialSection from "./TestimonialSection";
import RegistrationForm from "./RegistrationForm";

function InputDesign() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TestimonialSection />
        <RegistrationForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
  },
});

export default InputDesign;
