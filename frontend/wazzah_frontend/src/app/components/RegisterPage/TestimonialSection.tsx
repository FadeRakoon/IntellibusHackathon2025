import * as React from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const testimonials = [
  '"Amazing service!"',
  '"Best platform ever!"',
  '"5 star experience!"',
  '"Best hackathon ever!"',
  '"Glad to have met new people!"',
  '"10/10 would recommend!"',
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Change testimonial
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

        // Fade in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {testimonials.map((testimonial, index) => (
        <Animated.View
          key={index}
          style={[
            styles.testimonialItem,
            {
              opacity: index === currentIndex ? fadeAnim : 0,
              display: index === currentIndex ? "flex" : "none",
            },
          ]}
        >
          <Text style={styles.testimonialText}>{testimonial}</Text>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6366f1", // Indigo color
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    marginRight: 16,
  },
  testimonialItem: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  testimonialText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Inter",
  },
});

export default TestimonialSection;
