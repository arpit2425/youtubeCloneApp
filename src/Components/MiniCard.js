import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MiniCard = ({ id, title, channel, imgurl, channelid }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("VideoPlayer", { id, title })}
    >
      <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
        <Image
          source={{
            uri: imgurl,
          }}
          style={{ width: "40%", height: 100 }}
        />
        <View style={{ marginLeft: 15, marginTop: 20 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{ fontSize: 18, width: 200 }}
          >
            {title}
          </Text>
          {/* <Image
          source={{ uri: channelImg }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        /> */}
          <Text style={{ fontSize: 12, color: "#777" }}>{channel}</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="black"
          style={{ position: "absolute", right: 10, top: 30 }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default MiniCard;
