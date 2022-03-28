import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ENTRIES1 = [
  {
    title: "Web & Software",
    subtitle: "Lorem itur",
    illustration: "https://i.ibb.co/tDxgz41/4.png",
  },
  {
    title: "Product Design",
    subtitle: "Lorem ",
    illustration: "https://i.ibb.co/M17QLMw/15.png",
  },
  {
    title: "Ecommerce Sol.",
    subtitle: "Lorencat ",
    illustration: "https://i.ibb.co/5RvhjVP/10.png",
  },
  {
    title: "Digital Marketing",
    subtitle: "Lorergitur",
    illustration: "https://i.ibb.co/9q7jC2K/3.png",
  },
  {
    title: "Multimedia & Print",
    subtitle: "Lorem i",
    // illustration: "https://ibb.co/PNK8JjX",
    illustration: "https://i.ibb.co/ZV5CvX4/6.png",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Serviceslider = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    const { illustration, title } = item;
    return (
      <View style={styles.item}>
        <View style={styles.container}>
          <Image
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            source={{
              uri: illustration,
              width: "100%",
              height: 135,
            }}
          />
          <Text style={styles.heading}>{title}</Text>
        </View>
      </View>
    );
  };

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 2.5);
  const ITEM_HORIZONTAL_MARGIN = 30;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;

  return (
    <View>
      <Text style={styles.title}>Our Portfolio</Text>
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

export default Serviceslider;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#3EA3DC",
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,

    textTransform: "capitalize",
  },
  container: {
    backgroundColor: "#fff",
    margin: 10,
    display: "flex",
    alignItems: "center",

    borderRadius: 10,

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
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: 10,
  },
});
