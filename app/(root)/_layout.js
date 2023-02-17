import {Tabs} from "expo-router";

export default function Layout() {
    return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: 'Home'}} />
        <Tabs.Screen name="alpha" options={{title: 'Alpha'}} />
        <Tabs.Screen name="beta" options={{title: 'Beta'}} />
        <Tabs.Screen name="charlie" options={{ href: null }} />
    </Tabs>
  );
}
