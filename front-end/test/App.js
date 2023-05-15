import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PhoneButton from "./Components/Phone/PhoneButton";
import LoginPage from "./Components/LoginPage";
import Calendarpage from "./Components/Calendar/CalendarScreen";
import Board from "./Components/Board";
import BusSchedule from "./Components/BusSchedule";
import PostDetails from "./Components/PostDetails";
import CreatorPage from "./Components/Creator";
import Restaurant from "./Components/Restaurant";
import CalendarScreen from "./Components/Calendar/CalendarScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>메뉴</Text>
    </View>
  );
}

function CustomNavigationBar() {
  const navigation = useNavigation();
  const goToCalendarScreen = () => {
    navigation.navigate("CalendarScreen");
  };
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Icon name="calendar" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("RootStack")}
      >
        <Icon name="bell" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Restaurant")}
      >
        <Icon name="cutlery" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("BusSchedule")}
      >
        <Icon name="bus" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("PhoneNum")}
      >
        <Text style={styles.navButtonText}>
          <Icon name="phone" size={30} color="black" />
        </Text>
      </TouchableOpacity>
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
          options={{ drawerLabel: "로그인" }}
        />
        <Drawer.Screen
          name="RootStack"
          component={RootStack}
          options={{ drawerLabel: "게시판" }}
        />
        <Drawer.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ drawerLabel: "캘린더" }}
        />
        <Drawer.Screen
          name="Creator"
          component={CreatorPage}
          options={{ drawerLabel: "어플 정보 및 문의 사항" }}
        />
        <Drawer.Screen
          name="PhoneNum"
          component={PhoneButton}
          options={{ drawerLabel: "전화번호" }}
        />
        <Drawer.Screen
          name="BusSchedule"
          component={BusSchedule}
          options={{ drawerLabel: "버스" }}
        />
        <Drawer.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ drawerLabel: "식당 메뉴" }}
        />
      </Drawer.Navigator>

      <CustomNavigationBar />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  navBar: {
    flexDirection: "row",
    position: "absolute", // 고정 위치를 사용
    bottom: 0, // 하단에 배치
    width: "100%", // 화면 전체의 너비를 차지하도록 설정
    backgroundColor: "brown",

    // 배경색 지정
  },
  navButton: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 20,
  },
  navButtonText: {
    fontSize: 20,
  },
});
