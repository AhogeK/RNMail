import { Box, Text } from "@/atoms";
import { Button, Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

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

  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);

  const deviceWidth = Dimensions.get("window").width;

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        // translateX: withSpring(offset.value * (deviceWidth - 50))
        rotateZ: `${rotation.value}deg`,
      }],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * (deviceWidth - 50), {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  const renderItem = ({ item }: any) => (
    <Item title={item.title} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1}>
        <Text style={styles.text}>Page content</Text>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        <Animated.View style={[styles.box, defaultSpringStyles, styles.center]} />
        <Animated.View style={[styles.box, customSpringStyles]} />
        <Button onPress={() => {
          rotation.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withRepeat(withTiming(30, { duration: 100 }), 6, true),
            withTiming(0, { duration: 50 }),
          );
          offset.value = withSpring(Math.random(), {}, (finished) => {
            if (finished) {
              console.log("ANIMATION ENDED");
            } else {
              console.log("ANIMATION GOT CANCELLED");
            }
          });
        }} title="Move" />
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
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    marginBottom: 20,
  },
  center: {
    marginLeft: Dimensions.get("window").width / 2 - 25,
  },
});
