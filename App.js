import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { StripeProvider } from "@stripe/stripe-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./src/screens/Screens";
import * as Linking from "expo-linking";


const prefix = Linking.createURL("/");

const App = () => {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Order: "orders"
      }
    }
  };
  return (
    <>
      <StripeProvider
        publishableKey={
          "publishableKey"
        }
      >
        <NavigationContainer linking={linking}>
        <Screens />
        </NavigationContainer>
      <Toast />
      </StripeProvider>
    </>
  );
};
export default App;
