import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function DynamicNavigation() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>user things</Text>
      <Link href={{ pathname: "/details/[id]", params: { id: "Dale" } }}>
        User 1
      </Link>
      <Link href="/details/2">User 2</Link>
      <Link href="/details/3">User 3</Link>
    </View>
  );
}
