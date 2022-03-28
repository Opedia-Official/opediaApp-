import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, VStack, View, Heading } from "native-base";

const images = [
  "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
  "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
];

export default function TeamSliderItem({ image, index }) {
  return (
    <View style={styles.reviewView} key={index}>
      <View style={styles.reviewImage}>
        <Image
          style={styles.image}
          key={index}
          resizeMode="stretch"
          source={{ uri: images[2] }}
          alt="D"
        />
      </View>
      <View style={styles.reviewContent}>
        <Text style={styles.nameText} alignItems="flex-start" textAlign="right">
          Dihan abir
        </Text>
        <Text
          style={styles.DesText}
          mb="2"
          alignItems="flex-end"
          textAlign="right"
        >
          Web & Software development
        </Text>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  reviewView: {
    backgroundColor: "#fff",
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
    padding: 5,
    fontWeight: "normal",
    color: "#000",
    fontSize: 18,
    lineHeight: 19,
  },
  DesText: {
    fontWeight: "bold",
    color: "#FECA3F",
  },
  reviewContent: {
    width: "45%",
    paddingTop: 10,
    textAlign: "right",
  },
  wrapText: {
    // padding: 20,
    color: "#fff",
  },
  image: {
    alignSelf: "center",

    height: 90,
    width: 90,
    borderRadius: 10,
  },
});
