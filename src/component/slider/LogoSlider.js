import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";

const ENTRIES1 = [
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/MERN.png",
  },
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/Laravel.png",
  },
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/nodejs.png",
  },
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/Nextjs.png",
  },
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/xd.png",
  },
  {
    title: "BeautiCanyon",
    subtitle: "Lorem itur",
    illustration: "https://opediatech.com/webLogo/reactNative.png",
  },
  {
    title: "Earlier ",
    subtitle: "Lorem ",
    illustration: "https://opediatech.com/webLogo/dotNet.png",
  },
  {
    title: "Whiteset",
    subtitle: "Lorencat ",
    illustration: "https://opediatech.com/webLogo/MongoDB.png",
  },
  {
    title: "Acroreece",
    subtitle: "Lorergitur",
    illustration: "https://opediatech.com/webLogo/django.png",
  },
  {
    title: "ealand",
    subtitle: "Lorem i",
    illustration: "https://opediatech.com/webLogo/php.png",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Logoslider = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    const { illustration, title } = item;
    return (
      // <Text>{illustration}</Text>
      <View>
        <ImageBackground
          source={{ uri: illustration }}
          // source={require(illustration)}
          imageStyle={{ borderRadius: 10, resizeMode: "center" }}
          style={{
            width: "95%",
            height: "90%",
            // margin: 10,
            // paddingHorizontal: 5,
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#dbdbdb",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
          }}
        ></ImageBackground>
      </View>
    );
  };

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 5.5);
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
      hasParallaxImages={true}
      autoplay={true}
      loop={true}
      autoplayDelay={700}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
    />
  );
};

export default Logoslider;

const styles = StyleSheet.create({
  item: {
    height: 110,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 10 }), // Prevent a random Android rendering issue

    borderRadius: 8,
    marginHorizontal: 1,
    margin: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: 10,
  },
});
