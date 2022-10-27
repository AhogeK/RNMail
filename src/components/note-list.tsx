import React, { useCallback } from "react";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import { FlatListProps, ListRenderItem, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import NoteListItem from "./note-list-item";
import { Note } from "@/models";
import Animated, { AnimateProps } from "react-native-reanimated";
import { Box } from "@/atoms";
import Notes from "@/fixtures/notes";

const StyledFlatList = createBox<Theme,
  AnimateProps<FlatListProps<Note>>>(Animated.FlatList);

interface Props {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemPress: (noteId: string) => void;
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void;
}

const NoteList: React.FC<Props> = ({ onScroll, contentInsetTop, onItemPress, onItemSwipeLeft }) => {
  const renderItem = useCallback<ListRenderItem<Note>>(({ item }) => {
    return <NoteListItem {...item} onPress={onItemPress} onSwipeLeft={onItemSwipeLeft} />;
  }, [onItemPress, onItemSwipeLeft]);

  return (
    <StyledFlatList data={Notes}
                    contentInsetAdjustmentBehavior="automatic"
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    width="100%"
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    ListHeaderComponent={
                      <Box width={"100%"} height={contentInsetTop} />
                    }
    />
  );
};

export default NoteList;
