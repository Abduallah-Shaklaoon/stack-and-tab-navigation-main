import { View, Text } from 'react-native';
import React from 'react';
import {Drawer} from "expo-router/drawer";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default _layout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer screenOptions={{
                drawerActiveTintColor: "red",
                drawerActiveBackgroundColor: "blue",
                drawerLabelStyle: {fontSize: 20},
                drawerStatusBarAnimation: "fade"
            }}>
                <Drawer.Screen name ="(tabs)" options ={{title: "Profile"}}/>
                <Drawer.Screen name ="inbox"/>
                <Drawer.Screen name ="junk"/>
                <Drawer.Screen name ="sent"/>
            </Drawer>
        </GestureHandlerRootView>
    );
};