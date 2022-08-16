import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./components/Onboarding";
import HomeScreen from "./components/HomeScreen";

const Loading = () => {
  <View>
    <ActivityIndicator size={large} />
  </View>;
};
export default function App() {
  const [loading, setLoading] = useState(false);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (err) {
      console.log("Error @ checkOnboarding: ", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewOnboarding ? <HomeScreen /> : <Onboarding />}
      {/* <Onboarding /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
