import {Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";

export default function () {
    return (
        <View>
            <Text>
               Index
            </Text>
            <Link href={'/stack1/stack2/home'}>Go home</Link>
        </View>
    );
}
