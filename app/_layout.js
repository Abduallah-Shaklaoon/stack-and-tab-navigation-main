import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          headerRight: () => (
            <Button
              title="open"
              onPress={() => {
                router.push("modal");
              }}
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          title: "Modal",
          headerRight: () => (
            <Button
              title="suffer"
              onPress={() => {
                router.back();
              }}
            ></Button>
          ),
          presentation: "modal",
          animation: "slide_from_the_right",
        }}
      />
      <Stack.Screen name="(drawer)" options={{ title: "About" }} />
    </Stack>
  );
};

export default Layout;
