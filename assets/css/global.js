'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  /***** Global Styles *****/
  /***** Global Styles *****/
  /***** Global Styles *****/

  /***** Colors ****/

  //// OLD BLUE COLOR  #307ac9

  // PrimaryLightColor
  primaryLightColor: {
    color: '#131921',
  },

  // PrimaryLightColorBg
  primaryLightColorBg: {
    backgroundColor: '#131921',
  },

  // PrimaryDarkColor
  primaryDarkColor: {
    color: '#16162E',
  },
  // White color
  whiteColor: {
    backgroundColor: '#ffffff',
  },
  grayColor: {
    color: '#8B8B97',
  },
  //X**** Colors ****/

  /***** Buttons ****/

  // PrimaryBtn
  primaryBtn: {
    backgroundColor: '#307ac9',
    borderRadius: 15,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#307ac9',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  textBtn: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
  },

  // OutLineBtn
  OutLineBtn: {
    paddingVertical: 13,
    width: '40%',
    paddingHorizontal: 20,
    borderRadius: 11,
    borderWidth: 1,
  },
  //X***** Buttons ****/

  /***** Fonts ****/
  MediumFont: {
    fontSize: 20,
    lineHeight: 20,
    color: '#DDDDDD',
    paddingLeft: 2,
  },
  primaryFont: {
    fontSize: 16,
    lineHeight: 19,
    color: '#16162E',
  },
  primaryMediumFont: {
    fontSize: 14,
    lineHeight: 16,
    color: '#16162E',
  },
  BigFont: {
    fontSize: 42,
    lineHeight: 49.22,
    color: '#FFFFFF',
  },
  /// Label
  label: {
    opacity: 0.8,
    color: '#8B8B97',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 10,
  },
  //X***** Fonts ****/

  /// Flex Box
  flexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  /// InputPrimary
  input: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 20,
    color: '#16162E',
    height: 50,
  },

  notes:{
    maxHeight: 80,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 20,
    color: '#16162E',
    height: 80,
  },

  /// Error
  errorMessage: {
    fontSize: 14,
    lineHeight: 14,
    color: '#FF1414',
    marginTop: 8,
  },
});
