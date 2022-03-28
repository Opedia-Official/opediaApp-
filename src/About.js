import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import ReviewSlider from "./component/slider/ReviewSlider";
import TestimonialSlider from "./component/slider/TestimonialSlider";
import BottomTabCustome from "./navigation/BottomTabCustome";

const ENTRIES1 = [
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier ",
    subtitle: "Lorem ",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "Whiteset",
    subtitle: "Lorencat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acroreece",
    subtitle: "Lorergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "ealand",
    subtitle: "Lorem i",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Logoslider = ({ props, navigation }) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <BottomTabCustome navigation={navigation} />
      </View>
    );
  };

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 4.6);
  const ITEM_HORIZONTAL_MARGIN = 30;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;

  return (
    <View>
      <Text style={styles.title}>About</Text>
      <Text style={styles.heading}>A Team osf experience</Text>
      <Text style={styles.heading2}>IT SPECIALTIES</Text>

      <Text style={styles.des}>
        Construction is a general term meaning the art and science to form
        objects systems organizations, and comes from Latin construction and Old
        French construction. To construct is the verb: the act of building, and
        the noun
      </Text>
      <ReviewSlider />
      <TestimonialSlider />
      <BottomTabCustome navigation={navigation} />
    </View>
  );
};

export default Logoslider;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 39,
    textAlign: "left",
    color: "#FC9825",
  },
  heading: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    /* or 133% */

    color: "#3EA3DC",
  },
  heading2: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 32,
    /* or 133% */

    color: "#FC9825",
  },
  des: {},
  item: {
    height: 110,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: 10,
  },
});
