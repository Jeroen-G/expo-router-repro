import {Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";

export default function () {
    return (
        <View>
            <Text>
                About
            </Text>
            <Link href={'/'}>Go index</Link>
        </View>
    );
}
