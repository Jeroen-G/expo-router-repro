import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Stack} from "expo-router";

export default function () {
    return (
        <SafeAreaProvider>
            <Stack />
        </SafeAreaProvider>
    );
};
