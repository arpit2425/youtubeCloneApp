import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Header from "./../Components/Header";
import Card from "../Components/Card";
const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 180,
        height: 50,
        borderRadius: 4,
        marginTop: 10,
        paddingTop: 15,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        {name}
      </Text>
    </View>
  );
};
function Explore() {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <LittleCard name="Gaming" />
          <LittleCard name="Fashion" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Movies" />
        </View>
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
      </ScrollView>
    </View>
  );
}

export default Explore;
