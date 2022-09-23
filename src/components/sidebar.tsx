import React from "react";
import { View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

/**
 * About Function Components:
 *    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 * About React Navigation - Drawer navigation
 *    https://reactnavigation.org/docs/drawer-based-navigation/
 */
const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return <View style={{
    flex: 1
  }}></View>
}

export default Sidebar
