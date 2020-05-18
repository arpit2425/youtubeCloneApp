import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
const MiniCard = ({ id, title, channel, imgurl, channelid }) => {
  const [channelImg, setchannelImg] = useState("");
  // const getAvatar = () => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelid}&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyAtVkfVRiNbd4RzvSm7-_19uAnjznxpi3g`,
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setchannelImg(data.items.snippet.thumbnails.default.url));
  // };
  // getAvatar();
  return (
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
  );
};
export default MiniCard;
