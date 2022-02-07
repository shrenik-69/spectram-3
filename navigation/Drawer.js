import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigator';
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const Drawer = createDrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Navigator name="Home" component={TabNavigator} />
            <Drawer.Navigator name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;