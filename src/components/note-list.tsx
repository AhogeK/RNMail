import { Note } from "@/models";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React, { useCallback } from "react";
import { FlatList, FlatListProps, ListRenderItem } from "react-native";
import Notes from "@/fixtures/notes";
import NoteListItem from "@/components/note-list-item";

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList);

interface Props {

}

const NoteList: React.FC<Props> = () => {
  const renderItem = useCallback<ListRenderItem<Note>>(({ item }) => {
    return <NoteListItem {...item} />;
  }, []);

  return (
    <StyledFlatList data={Notes} contentInsetAdjustmentBehavior="automatic"
                    renderItem={renderItem} keyExtractor={item => item.id} width="100%" />
  );
};

export default NoteList;
