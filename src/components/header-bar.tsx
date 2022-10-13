import { Bar } from "@/atoms";
import AnimatedBox, { AnimatedBoxProps } from "@/atoms/animated-box";
import * as React from "react";
import { SafeAreaView } from "react-native";

const HeaderBar: React.FC<AnimatedBoxProps> = ({ children, ...rest }: any) => {
  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <SafeAreaView>
        <Bar
          variant="headerBar"
          flexDirection="row"
          alignItems="center"
          mx="lg"
          my="md"
          px="sm"
          minHeight={44}
        >
          {children}
        </Bar>
      </SafeAreaView>
    </AnimatedBox>
  );
};

export default HeaderBar;
