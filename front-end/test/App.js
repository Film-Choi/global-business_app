import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

import LoginPage from "./Components/LoginPage";
import Board from "./Components/Board";
import PostDetails from "./Components/PostDetails";
import CreatorPage from "./Components/Creator";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerHeader(props) {
  return (
    <View style={{ height: 50, flexDirection: "row", alignItems: "center" }}>
      <Text style={{ marginLeft: 16, fontWeight: "bold", fontSize: 16 }}>
        메뉴
      </Text>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Board} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <CustomDrawerHeader />
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ drawerLabel: "로그인" }} //drawerLabel: () => null
        />
        <Drawer.Screen
          name="Root"
          component={RootStack}
          options={{ drawerLabel: "게시판" }}
        />
        <Drawer.Screen
          name="Creator"
          component={CreatorPage}
          options={{ drawerLabel: "어플 정보 및 문의 사항" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
