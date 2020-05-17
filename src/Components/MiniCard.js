import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
const MiniCard = () => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1534157327728-accacabda257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        }}
        style={{ width: "40%", height: 100 }}
      />
      <View style={{ marginLeft: 15, marginTop: 20 }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={{ fontSize: 18, width: 200 }}
        >
          Title of the video
        </Text>
        <Text style={{ fontSize: 12, color: "#777" }}>
          user-458k views-2 hours ago
        </Text>
      </View>
      <Entypo
        name="dots-three-vertical"
        size={20}
        color="black"
        style={{ position: "absolute", right: 10, top: 30 }}
      />
    </View>
  );
};
export default MiniCard;
