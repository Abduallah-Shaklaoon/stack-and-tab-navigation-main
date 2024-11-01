import { View, Text } from "react-native-web";
import React from "react";
import { Stack } from "expo-router";

export default _layout   = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="user1" options={{ title: "User 1" }} />
      <Stack.Screen name="user2" options={{ title: "User 2" }} />
    </Stack>
  );
}