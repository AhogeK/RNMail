import React from 'react'
// https://reactnavigation.org/docs/navigation-container/
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "@/navigations";

const App = () => {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  )
}

export default App
