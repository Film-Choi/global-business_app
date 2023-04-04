import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

import LoginPage from './Components/LoginPage';
import Navigator from './Components/Navigator'

const Drawer = createDrawerNavigator();

function CustomDrawerHeader(props) {
  return (
    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginLeft: 16, fontWeight: 'bold', fontSize: 16 }}>메뉴</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <CustomDrawerHeader />
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}>
        <Drawer.Screen name="LoginPage" component={LoginPage} options={{ drawerLabel: '로그인' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
