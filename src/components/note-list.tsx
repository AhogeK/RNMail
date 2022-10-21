import { Note } from "@/models";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React, { useCallback } from "react";
import Notes from "@/fixtures/notes";
import NoteListItem from "@/components/note-list-item";
import { Animated, FlatListProps, ListRenderItem, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Box } from "@/atoms";
import AnimatedProps = Animated.AnimatedProps;

const StyledFlatList = createBox<Theme,
  AnimatedProps<FlatListProps<Note>>>(Animated.FlatList);

interface Props {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const NoteList: React.FC<Props> = ({ onScroll, contentInsetTop }) => {
  const renderItem = useCallback<ListRenderItem<Note>>(({ item }) => {
    return <NoteListItem {...item} />;
  }, []);

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
