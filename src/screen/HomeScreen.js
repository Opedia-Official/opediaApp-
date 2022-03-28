import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  View,
  ScrollView,
} from "native-base";

import { Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppScreen from "../component/AppScreen";
import Feather from "react-native-vector-icons/Feather";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";
import Logoslider from "../component/slider/LogoSlider";
import BannerSlider from "../component/slider/BannerSlider";
import Serviceslider from "../component/slider/ServiceSlider";
import ReviewSlider from "../component/slider/ReviewSlider";

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.headerview}>
        {/* <Feather
          name="align-left"
          color="#000"
          size={20}
          onPress={() => navigation.openDrawer()}
        /> */}

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            onPress={() => navigation.openDrawer()}
            source={require("../assets/icons/burger_menu_icon.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/icons/brandLogo.png")}
        />
      </View>

      <ScrollView style={{ paddingHorizontal: 10 }}>
        <BannerSlider />
        <HeaderComponent navigation={navigation} />
        <Logoslider />
        <Serviceslider />

        {/* <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={insuranceData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <InsuranceCard data={item} />}
        /> */}
        <FooterComponent />
      </ScrollView>
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <SliderComponent navigation={navigation} />

        <Box>
          <VStack maxW="100%" mx="10px" alignItems="center">
            <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
              We team of experience It Specialties.
            </Heading>
            <Button onPress={() => navigation.navigate("Register")}>
              Quote
            </Button>
            <Text
              w="100%"
              padding="5"
              textAlign="center"
              fontSize="md"
              color="muted.400"
            >
              2 years+ serving as a leading software company. A unique workflow
              and high-quality services are what sets us apart from competitors.
              We understand customers' challenges and pain points. You can count
              on us for assistance. Simple Steps of growth
            </Text>
          </VStack>
        </Box>
        <Heading w="100%" textAlign="center" fontSize="2xl" mt="1">
          Logos
        </Heading>
      </VStack>
    </View>
  );
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
  "https://i.ibb.co/pwKY2pb/b1.png",
  "https://i.ibb.co/LzytBwG/b2.png",
  "https://i.ibb.co/GWdrSPn/b5.png",
  "https://i.ibb.co/pXXQzJM/b3.png",
  "https://i.ibb.co/d0DVt2h/b4.png",
];

const SliderComponent = () => {
  return (
    <VStack>
      <View style={styles.wrap}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <View key={index}>
              <Image
                style={styles.wrapImage}
                key={index}
                resizeMode="stretch"
                source={{ uri: image }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </VStack>
  );
};

const FooterComponent = () => {
  return (
    <VStack mt="5" maxW="100%">
      <ReviewSlider />
      <AboutUs />
      <Footer />
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapImage: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    // marginEnd: 10,
    // borderRadius: 10,
  },
  headerview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  location: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,

    fontSize: 16,
    lineHeight: 14,
    fontWeight: "bold",
    color: "rgba(27, 32, 40, 0.8)",
  },
  logo: {
    height: 60,
    // width: 220,
    marginVertical: 15,
  },
});
