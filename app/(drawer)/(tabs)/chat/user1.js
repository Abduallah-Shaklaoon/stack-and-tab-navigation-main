import { View, Text } from "react-native-web";
import React from "react";
import { Link } from "expo-router";
export default user1 = () => {
    return (
        <View>
            <Text>User1</Text>
            <Link href="/chat/user2">go to user 2 </Link>
        </View>
    );
}