import {View, Text} from 'react-native';
import React from 'react';
import { Link } from "expo-router";
export default function user2() {
    return (
        <View>
            <Text>
                User2
            </Text>
            <Link href="/chat/user1">go to user 1 </Link>
        </View>
    );
}