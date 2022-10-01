import { Box, Text } from "@/atoms";
import { StyleSheet } from "react-native";

export default function SafeAreaViewDemo() {
  return (
    <Box flex={1}>
      <Text style={styles.text}>Page content</Text>
    </Box>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
})
