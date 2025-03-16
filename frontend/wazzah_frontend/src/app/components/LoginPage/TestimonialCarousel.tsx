import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const testimonials = [
  '"Amazing service!"',
  '"Best platform ever!"',
  '"5 star experience!"',
  '"Best hackathon ever!"',
  '"Glad to have met new people!"',
  '"10/10 would recommend!"',
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
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
      <View style={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <Animated.View
            key={index}
            style={[
              styles.testimonial,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6366f1", // Indigo-500
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  testimonialContainer: {
    position: "relative",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  testimonial: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  testimonialText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default TestimonialCarousel;
