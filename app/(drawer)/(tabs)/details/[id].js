import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function App() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details of user {id}</Text>
    </View>
  );
}
