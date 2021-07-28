import * as React from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
var customFonts = { "Bubblegum": require("../assets/fonts/BubblegumSans-Regular.ttf") }