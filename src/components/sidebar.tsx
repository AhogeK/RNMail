import React from "react";
// https://reactnative.dev/docs/safeareaview
import { SafeAreaView } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Box, Text } from "@/atoms";

/**
 * About Function Components:
 *    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 * About React Navigation - Drawer navigation
 *    https://reactnavigation.org/docs/drawer-based-navigation/
 */
const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg" onPress={() => navigation.navigate("SafeAreaViewDemo")}>
          Sidebar
        </Text>
      </SafeAreaView>
    </Box>
  );
};

export default Sidebar;
