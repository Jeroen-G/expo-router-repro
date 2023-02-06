import {Drawer} from "expo-router/drawer";

export default function () {
    return (
        <Drawer>
            <Drawer.Screen name="drawer-test-page" options={{title: 'test page'}} />
            <Drawer.Screen name="/help/index" options={{title: 'help'}} />
        </Drawer>
    );
};
