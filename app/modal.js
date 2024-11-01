import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function modal() {
  const ispresented = router.canGoBack();
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: "50%",
    },
  });

  return (
    <View style={styles.background}>
      <Text>Modal</Text>
      {ispresented && <Link href="/">Close Modal</Link>}
    </View>
  );
}
