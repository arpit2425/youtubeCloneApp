import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        height: 50,

        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 8,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
      >
        <Entypo name="youtube" size={28} color="red" />
        <Text style={{ fontSize: 24, marginLeft: 10, fontWeight: "bold" }}>
          Youtube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: 150,
          justifyContent: "space-around",
        }}
      >
        <Ionicons color="#212121" name="md-videocam" size={28} />
        <Ionicons color="#212121" name="md-search" size={28} />
        <MaterialIcons color="#212121" name="account-circle" size={28} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
