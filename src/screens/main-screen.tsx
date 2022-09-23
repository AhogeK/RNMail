import React, { useState } from "react";
/**
 * https://reactnative.dev/docs/view
 * https://reactnative.dev/docs/text
 */
import { Text, View, StyleSheet } from "react-native";

export default function MainScreen() {

  const [titleText, setTitleText] = useState("Title Text");
  const bodyText = "Hello World";

  const onPressTitle = () => {
    if (titleText == "Title Text") {
      setTitleText("Title Text [pressed]");
    } else {
      setTitleText("Title Text");
    }
  };

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text style = {{
          color: 'black',
        }}>{bodyText}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  }
});
