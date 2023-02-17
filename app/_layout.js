import {Drawer} from "expo-router/drawer";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Linking} from "react-native";
import {Link} from "expo-router";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Website" onPress={() => Linking.openURL('https://www.expo.dev/')} />
            <Link href={'/alpha'} onPress={() => props.navigation.closeDrawer()}>Alpha</Link>
            <Link href={'/beta'} onPress={() => props.navigation.closeDrawer()}>Beta</Link>
            <Link href={'/charlie'} onPress={() => props.navigation.closeDrawer()}>Charlie</Link>
        </DrawerContentScrollView>
    );
}

export default function Layout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
            {/* All other screens should be hidden */}
        </Drawer>
    );
};
