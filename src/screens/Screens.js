import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};
export default Screens;
