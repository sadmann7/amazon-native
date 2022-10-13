import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { RootTabScreenProps } from "../types";
import HeroSection from "../components/home/HeroSection";

const HomeScreen = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.container}>
      <HeroSection />
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
