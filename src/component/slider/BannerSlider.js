import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";

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

const BannerSlider = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.itemBanner}>
        <ImageBackground
          source={{ uri: item.illustration }}
          imageStyle={{ borderRadius: 10 }}
          style={{
            width: "100%",
            height: "50%",
            margin: 10,
            padding: 5,
          }}
        ></ImageBackground>
      </View>
    );
  };

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 1.16);
  const ITEM_HORIZONTAL_MARGIN = 30;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;

  return (
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
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  itemBanner: {
    height: 110,
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
