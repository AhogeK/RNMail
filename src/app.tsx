import React from "react";
// https://reactnavigation.org/docs/navigation-container/
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "@/navigations";
import light from "@/themes/light";
import { ThemeProvider } from "@shopify/restyle";
import StatusBar from "@/components/status-bar";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
