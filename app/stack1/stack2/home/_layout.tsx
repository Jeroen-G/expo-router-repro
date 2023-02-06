import {Slot, Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: 'Thuis'}} />
            <Stack.Screen name="about" options={{title: 'Over'}} />
        </Stack>
    );
}
