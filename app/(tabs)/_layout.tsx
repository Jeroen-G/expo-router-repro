import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'home',
                }}
            />
            <Tabs.Screen
                name="agenda/index"
                options={{
                    title: 'agenda',
                }}
            />
            <Tabs.Screen
                name="help/index"
                options={{
                    title: 'help',
                }}
            />
        </Tabs>
    );
}
