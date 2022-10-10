import { createBox } from "@shopify/restyle";
import { ViewProps } from "react-native";
import { Theme } from "@/themes";
import Animated, { AnimateProps } from "react-native-reanimated";

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View);

export default AnimatedBox;
