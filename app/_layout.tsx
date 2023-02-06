import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Drawer} from "expo-router/drawer";

export default function () {
    return (
        <SafeAreaProvider>
            <Drawer screenOptions={{drawerPosition: 'right'}} />
        </SafeAreaProvider>
    );
};
