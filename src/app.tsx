import React from 'react'
// https://reactnavigation.org/docs/navigation-container/
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "@/navigations";
import light from "@/themes/light";
import { ThemeProvider } from "@shopify/restyle";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
