import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  use,
  SafeAreaView,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  //   const { width } = useWindowDimensions();
  //   console.log(item);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        {/* <Text>Screen</Text> */}

        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 410,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    width: 360,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
