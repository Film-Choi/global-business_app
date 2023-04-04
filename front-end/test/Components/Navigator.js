import React from 'react';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    } from '@react-navigation/drawer';
    
const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <Drawer.Navigator>
            <text>hi</text>
        </Drawer.Navigator>
    );
}