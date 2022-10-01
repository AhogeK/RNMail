import { Box, Text } from "@/atoms";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";

interface Data {
  id: string;
  title: string;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }: Data) => (
  <Box style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </Box>
);

export default function SafeAreaViewDemo() {
  const renderItem = ({ item }: any) => (
    <Item title={item.title} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1}>
        <Text style={styles.text}>Page content</Text>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
