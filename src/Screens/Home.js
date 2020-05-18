import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Components/Header";
import Constant from "expo-constants";
import Search from "../Screens/Search";
import Card from "../Components/Card";

export default function Home() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      {/* <Search /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
