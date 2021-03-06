import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, VStack, View, Heading } from "native-base";
import Logoslider from "./slider/LogoSlider";

const images = [
  "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
  "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
];

function ReviewSlider() {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {};

  return (
    <VStack>
      <View style={styles.wrap}>
        {/* <ServicesSlider /> */}
        <Heading ResponsiveValue="container" fontSize="lg" mb="5" bold>
          Review
        </Heading>
        <Logoslider />
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          alwaysBounceHorizontal={true}
          scrollEnabled={true}
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <ReviewItem image={image} index={index} />
          ))}
        </ScrollView>
      </View>
    </VStack>
  );
}

export default function ReviewItem({ item, index }) {
  const { illustration, name, designation } = item;
  return (
    <View style={styles.reviewView} key={index}>
      <View style={styles.reviewImage}>
        <Image
          style={styles.image}
          key={index}
          resizeMode="stretch"
          source={{ uri: illustration }}
        />
      </View>
      <View style={styles.reviewContent}>
        <Text style={styles.wrapText} alignItems="center" textAlign="center">
          lorem on a but not scrollEventThrottle. You will only.
        </Text>
        <Text style={styles.nameText} alignItems="flex-start" textAlign="right">
          {name}
        </Text>
        <Text
          style={styles.DesText}
          mb="2"
          alignItems="flex-end"
          textAlign="right"
        >
          {designation}
        </Text>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  reviewView: {
    backgroundColor: "#3EA3DC",
    borderRadius: 10,
    width: "97%",
    display: "flex",
    flexDirection: "row",
  },
  reviewImage: {
    alignSelf: "center",
    margin: 10,
  },
  nameText: {
    fontWeight: "bold",
    color: "#fff",
  },
  DesText: {
    fontWeight: "bold",
    color: "#FECA3F",
  },
  reviewContent: {
    width: "55%",
  },
  wrapText: {
    padding: 20,
    color: "#fff",
    textAlign: "right",
    // textAlign: "justify",
  },
  image: {
    alignSelf: "center",

    height: 150,
    width: 150,
  },
});
