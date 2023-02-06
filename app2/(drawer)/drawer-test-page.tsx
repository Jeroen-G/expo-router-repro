import React from 'react';
import { View } from 'react-native';
import {Link} from "expo-router";

export default function DrawerTestPage() {
    return (
        <View>
            <Link href="/home">To home</Link>
        </View>
    );
}
