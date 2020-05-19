import React, { useState } from "react";
import Constant from "expo-constants";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  FlatList,
} from "react-native";
import MiniCard from "../Components/MiniCard";
import { useSelector, useDispatch } from "react-redux";

//www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=songs&type=video&key=AIzaSyAtVkfVRiNbd4RzvSm7-_19uAnjznxpi3g
export default function Home({ navigation }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  // const [miniCards, setMiniCards] = useState([]);
  const dispatch = useDispatch();
  const miniCards = useSelector((state) => {
    return state;
  });
  const renderCards = () => {
    // setMiniCards([]);
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&regionCode=IN&type=video&key=AIzaSyAtVkfVRiNbd4RzvSm7-_19uAnjznxpi3g`
      // `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&regionCode=India&safeSearch=moderate&type=video&key=AIzaSyAtVkfVRiNbd4RzvSm7-_19uAnjznxpi3g`
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     Accept: "application/json",
      //   },
      // }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCards(data.items);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "red",
          marginTop: Constant.statusBarHeight,
          paddingVertical: 5,
          elevation: 5,
          height: 50,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            width: "70%",
            height: 35,
            borderWidth: 0.5,
            padding: 2,
            backgroundColor: "#e6e6e6",
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <MaterialIcons
          onPress={renderCards}
          name="send"
          size={24}
          color="black"
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCards}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <MiniCard
              imgurl={item.snippet.thumbnails.medium.url}
              id={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              channelid={item.snippet.channelId}
            />
          );
        }}
      />
    </View>
  );
}
