import * as React from "react";
// https://reactnavigation.org/docs/native-stack-navigator/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// https://reactnavigation.org/docs/drawer-based-navigation/
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "@/screens/main-screen";
import Sidebar from "@/components/sidebar";
// https://reactnavigation.org/docs/typescript/
import { NavigatorScreenParams } from "@react-navigation/native";
import SafeAreaViewDemo from "@/screens/safe-area-view-demo";

export type HomeDrawerParamList = {
  Main: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>,
  SafeAreaViewDemo: NavigatorScreenParams<HomeDrawerParamList>
  Detail: {
    noteId: string
  }
}

const Drawer = createDrawerNavigator<HomeDrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Home() {
  return (
    <Drawer.Navigator initialRouteName="Main" screenOptions={{
      drawerType: "back",
      swipeEdgeWidth: 200,
    }}
                      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Main" component={MainScreen} options={{
        headerShown: false,
      }} />
    </Drawer.Navigator>
  );
}

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="SafeAreaViewDemo" component={SafeAreaViewDemo} />
    </Stack.Navigator>
  );
}
