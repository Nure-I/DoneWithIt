import React from "react";
import { View, Animated, StyleSheet, useWindowDimensions } from "react-native";

export default Paginator = ({ data, scrollx }) => {
  const width = 410;
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#493dBa",
    marginHorizontal: 8,
  },
});
