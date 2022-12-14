import React, { useCallback } from "react";
/**
 * https://reactnative.dev/docs/view
 * https://reactnative.dev/docs/text
 */
import { Box, Container, Text, TouchableOpacity } from "@/atoms";
import NoteList from "@/components/note-list";
import HeaderBar from "@/components/header-bar";
import FeatherIcon from "@/components/icon";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { HomeDrawerParamList, RootStackParamList } from "@/navigations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useStickyHeader from "@/hooks/use-sticky-header";

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight,
  } = useStickyHeader();
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity m={"xs"} p={"xs"} rippleBorderless
                          onPress={handleSidebarToggle}>
          <FeatherIcon name={"menu"} size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems={"center"}>
          <Text fontWeight={"bold"}>All Notes</Text>
        </Box>
        <TouchableOpacity m={"xs"} p={"xs"} rippleBorderless>
          <FeatherIcon name={"more-vertical"} size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  );
}
