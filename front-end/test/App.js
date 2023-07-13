import React, { Component, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PhoneButton from "./Components/Phone/PhoneButton";
import LoginPage from "./Components/LoginPage";
import Calendarpage from "./Components/Calendar/CalendarScreen";
import Board from "./Components/Board";
import BusSchedule from "./Components/BusSchedule";
import PostDetails from "./Components/PostDetails";
import CreatorPage from "./Components/Creator";
import Restaurant from "./Components/Restaurant";
import CalendarScreen from "./Components/Calendar/CalendarScreen";
import NavigatorBar from "./Components/NavigatorBar";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerHeader(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>프로필</Text>
      </View>
      <View style={styles.divideArea}></View>
      <View style={styles.profile}>
        <Image
          style={styles.homeLogo}
          source={require("./assets/crimson2positive.gif")}
          resizeMode="contain"
        />
        <Text style={styles.profileName}>홍길동</Text>
        <Text style={styles.profileInfo}>xxx학과</Text>
        <Text style={styles.profileInfo}>xxxxxxxx학번</Text>

        <TouchableOpacity
          style={styles.logButton}
          onPress={() => {
            navigation.navigate("LoginPage");
          }}
        >
          <Text>로그아웃</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divideArea}></View>
      <View style={styles.ButtonArea}>
        <TouchableOpacity
          style={styles.creatButton}
          onPress={() => {
            navigation.navigate("Creator");
          }}
        >
          <Text>기타 문의사항 및 어플 건의 사항</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.creatButton}
          onPress={() => {
            navigation.navigate("Creator");
          }}
        >
          <Text>어플 개발에 도움을 주신 분</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divideArea}></View>
    </View>
  );
}

function CustomNavigationBar(component) {
  const navigation = useNavigation();
  const [page, setPage] = useState("LoginPage");

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          navigation.navigate("Calendar");
          setPage("Calendar");
        }}
      >
        <Icon name="calendar" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("RootStack")}
      >
        <Icon name="bell" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Restaurant")}
      >
        <Icon name="cutlery" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("BusSchedule")}
      >
        <Icon name="bus" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("PhoneNum")}
      >
        <Text style={styles.navButtonText}>
          <Icon name="phone" size={30} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function RootStack() {
  const k = 1;
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
            <DrawerContentScrollView style={styles.logi} {...props}>
              <CustomDrawerHeader />
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
      <CustomNavigationBar />;
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logi: { backgroundColor: "brown" },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",

    fontSize: 40,
  },
  logButton: {
    borderRadius: 10,
    padding: 10,

    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    fontFamily: "Spoqa Han Sans Neo",
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
  profile: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  homeLogo: {
    height: 100,
    width: 100,
  },
  ButtonArea: {
    alignItems: "center",
    justifyContent: "center",
  },
  creatButton: {
    width: "80%",
    borderRadius: 10,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  profileName: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  profileInfo: {
    color: "white",
    fontSize: 15,
    marginBottom: 5,
  },
  divideArea: {
    width: "100%",
    height: 50,
    backgroundColor: "#880000",
  },
});
