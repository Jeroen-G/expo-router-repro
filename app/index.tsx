import {Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";

export default function () {
    return (
        <View>
            <Text>
               Index
            </Text>
            <Link href={'/draws/home'}>Go home</Link>
        </View>
    );
}
