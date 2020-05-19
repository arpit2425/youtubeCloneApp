import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
const Card = ({ id, title, channel, imgurl, channelid }) => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: imgurl,
          }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <MaterialIcons
          color="#212121"
          name="account-circle"
          size={32}
          style={{ marginLeft: 10 }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{ fontSize: 18, width: 300 }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 12, color: "#777" }}>{channel}</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="black"
          style={{ position: "absolute", right: 10 }}
        />
      </View>
    </View>
  );
};
export default Card;
