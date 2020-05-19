import React from "react";
import Constant from "expo-constants";
import { View, Text, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
function VideoPlayer({ route }) {
  const { id, title } = route.params;
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          width: "100%",
          height: 200,
        }}
      >
        <WebView
          javaScriptEnabled={true}
          style={{ flex: 1 }}
          scrollEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri: `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&showinfo=0&controls=1&fullscreen=1`,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        ellipsizeMode="tail"
        numberOfLines={2}
      >
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
    </View>
  );
}

export default VideoPlayer;
