import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Text from "../components/CustomeText";
const globalStyle = require("../../assets/css/global");
import AsyncStorage from "@react-native-async-storage/async-storage";
const OnBoarding = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);
  const [token, setToken] = useState("");
  const [active, setActive] = useState(false);

  // Check token if exist
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userInfo");

      if (value !== null) {
        // value previously stored
        setToken(value);
        setActive(true);
      } else {
        setActive(false);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Gilroy-Bold": require("../../assets/fonts/Gilroy-Bold.ttf"),
        "Gilroy-ExtraBold": require("../../assets/fonts/Gilroy-ExtraBold.otf"),
        "Gilroy-Medium": require("../../assets/fonts/Gilroy-Medium.ttf"),
        "Gilroy-Regular": require("../../assets/fonts/Gilroy-Regular.ttf"),
      });
    }
    getData();
    loadFonts();
    const passedTime = () =>
      setTimeout(() => {
        setTimePassed(true);
      }, 3000);
    passedTime();
  }, []);

  return (
    <>
      {false ? (
        <Text>Test</Text>
      ) : (
        <>
          {!active ? (
            <Text>Drawer</Text>
          ) : (
            <ImageBackground
              style={styles.image}
              blurRadius={6}
              source={require("../../assets/images/bg-image.png")}
            >
              <View style={{ marginTop: 100, marginLeft: 10 }}>
                <Text
                  type="extraBold"
                  style={[globalStyle.primaryDarkColor, styles.welcomeText]}
                >
                  Welkom bij
                </Text>
                <Text
                  type="extraBold"
                  style={[globalStyle.primaryLightColor, styles.welcomeText]}
                >
                  Suriwebwinkel
                </Text>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  title="button"
                  style={[
                    globalStyle.primaryBtn,
                    { backgroundColor: globalStyle.primaryLightColor.color },
                  ]}
                >
                  <Text style={globalStyle.textBtn} type="bold">
                    Aanmelden
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Signup")}
                  title="button"
                  style={[
                    globalStyle.primaryBtn,
                    globalStyle.whiteColor,
                    { marginTop: 20 },
                  ]}
                >
                  <Text
                    style={[globalStyle.textBtn, globalStyle.primaryDarkColor]}
                    type="bold"
                  >
                    Registreren
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          )}
        </>
      )}
    </>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1,
    padding: 20,
    position: "relative",
  },
  welcomeText: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "800",
  },
  bottom: {
    position: "absolute",
    bottom: 46,
    width: "100%",
    left: 20,
  },
});
