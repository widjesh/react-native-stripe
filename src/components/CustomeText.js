import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = (props) => {
  setFontType = (type) => {
    switch (type) {
      case "bold":
        return "Gilroy-Bold";
      case "regular":
        return "Gilroy-Regular";
      case "extraBold":
        return "Gilroy-ExtraBold";
      default:
        return "Gilroy-Medium";
    }
  };

  const font = setFontType(props.type ? props.type : "normal");
  const style = [{ fontFamily: font }, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });
  return <Text {...allProps}>{props.children}</Text>;
};
export default CustomText;
