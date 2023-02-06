import {Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";

export default function () {
    return (
        <View>
            <Text>
               Home
            </Text>
            <Link href={'/draws/home/about'}>Go about</Link>
        </View>
    );
}
