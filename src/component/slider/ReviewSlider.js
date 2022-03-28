import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import ReviewItem from "../ReviewSlider";

const ENTRIES1 = [
  {
    name: "Dihan Abir",
    designation: "Programmer",
    illustration:
      "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
  },
  {
    name: "Delwor hossain ",
    designation: "CEO, aiseo.io ",
    illustration: "https://i.ibb.co/5h5hw3V/7.png",
  },
  {
    name: "Hannan mia",
    designation: "At Home ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    name: "Ohe mia",
    designation: "COO, Ohe",

    illustration:
      "https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80",
  },
  {
    name: "Abir normal",
    designation: "CTO, Normal",
    illustration: "https://i.ibb.co/BnMv2RG/2.png",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const ReviewSlider = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        {/* <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        /> */}
        <ReviewItem item={item} />
      </View>
    );
  };

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 1.2);
  const ITEM_HORIZONTAL_MARGIN = 30;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;

  return (
    <View>
      <Text style={styles.title}>Review</Text>
      <Carousel
        ref={carouselRef}
        // renderItem={2}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        sliderHeight={20}
        // itemHeight={80}
        data={entries}
        renderItem={renderItem}
        // hasParallaxImages={true}
        autoplay={true}
        loop={true}
        autoplayDelay={1000}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default ReviewSlider;

const styles = StyleSheet.create({
  item: {
    height: 210,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#FC9825",
    marginBottom: 25,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 10 }), // Prevent a random Android rendering issue
    backgroundColor: "red",
    borderRadius: 8,
    marginHorizontal: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: 10,
  },
});
