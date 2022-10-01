import React from "react";
import { BoxProps } from "@/atoms/box";
import { Box } from "@/atoms/index";

const Container: React.FC<BoxProps> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
);

export default Container;
