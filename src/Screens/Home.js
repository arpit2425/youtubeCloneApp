import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Components/Header";
import Card from "../Components/Card";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
