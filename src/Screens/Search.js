import React, { useState } from "react";

import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
export default function Home() {
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          elevation: 5,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <TextInput
          style={{
            width: "70%",
            borderWidth: 0.5,
            padding: 2,
            backgroundColor: "#e6e6e6",
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <MaterialIcons name="send" size={24} color="black" />
      </View>
    </View>
  );
}
