import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Header from "../Components/Header";
import Constant from "expo-constants";
import Search from "../Screens/Search";
import Card from "../Components/Card";
import { useSelector } from "react-redux";
export default function Home() {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <Card
              imgurl={item.snippet.thumbnails.medium.url}
              id={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              channelid={item.snippet.channelId}
            />
          );
        }}
      />
      {/* <Search /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
