import {Drawer} from "expo-router/drawer";

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen name="/" options={{title: 'Home'}} />
            <Drawer.Screen name="alpha" options={{title: 'Alpha'}} />
            <Drawer.Screen name="beta" options={{title: 'Beta'}} />
            <Drawer.Screen name="charlie" options={{title: 'Charlie'}} />
            {/* All other screens should be hidden */}
        </Drawer>
    );
};
