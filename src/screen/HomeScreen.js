import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  FlatList,
  Button,
  View,
  ScrollView,
} from "native-base";

import { Dimensions, StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";
import InsuranceCard from "../component/InsuranceCard";
import ServicesSlider from "../component/ServicesSlider";
import insuranceData from "../data/data";
import ReviewSlider from "../component/ReviewSlider";
import CustomeSlider from "../component/slider/CustomeSlider";


const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={insuranceData}
        ListHeaderComponent={() => <HeaderComponent navigation={navigation} />}
        ListFooterComponent={() => <FooterComponent />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <InsuranceCard data={item} />}
      />
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = ({ navigation }) => {
  return (
    <VStack m="5">
      <SliderComponent navigation={navigation} />
      {/* <CustomeSlider/> */}
    
      <Box mt="5">
        <VStack maxW="100%" mx="10px" alignItems="center">
          <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
            We team of experience It Specialties.
          </Heading>
          <Button onPress={() => navigation.navigate("Register")}>Quote</Button>
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
        Services
      </Heading>
    </VStack>
  );
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
  "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
  "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
];

const SliderComponent = ({ navigation }) => {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {};

  return (
    <VStack m="5">
      <View style={styles.wrap}>
        {/* <ServicesSlider /> */}
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <View key={index}>
              <Image
                style={styles.wrap}
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



// const ReviewSlider = ({ navigation }) => {
//   const [imgActive, setImgActive] = useState(0);

//   const onChange = (nativeEvent) => {};

//   return (
//     <VStack m="5">
//       <View style={styles.wrap}>
//         {/* <ServicesSlider /> */}
//         <ScrollView
//           onScroll={({ nativeEvent }) => onChange(nativeEvent)}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           horizontal
//           style={styles.wrap}
//         >
//           {images.map((image, index) => (
//             <View key={index}>
//               <Image
//                 style={styles.wrap}
//                 key={index}
//                 resizeMode="stretch"
//                 source={{ uri: image }}
//               />
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </VStack>
//   );
// };




const FooterComponent = () => {
  return (
    <VStack mt="5" maxW="100%">
        <ReviewSlider  />

    <View>
    <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
          How does it work?
        </Heading>
      <Image 
        source={require('../assets/gif/AE.gif')}  
        style={{width: 400, height: 700 }}
    />
    </View>


      <Box my="2" w="100%" alignItems="center">
        <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
          How does it work?
        </Heading>
        <Text w="80%" textAlign="center" fontSize="md" color="muted.400">
          Complete 3 simple steps to find the best insurance plan for your or
          your family!
        </Text>
      </Box>
      <Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group1907.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Enter details
          </Heading>
          <Text w="80%" textAlign="center" color="muted.500" fontSize="md">
            Answer a few simple question, so the program could generate a custom
            quote for you.
          </Text>
        </Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group2005.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Compare
          </Heading>
          <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
            View the quotes, compare them and choose the best deal.
          </Text>
        </Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group2751.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Buy Online
          </Heading>
          <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
            Get instant insurance from the company of your choice through us.
          </Text>
        </Box>
        <Box my="2">
          <Box mt="3" mb="5" w="100%" alignItems="center">
            <Heading textAlign="center" fontSize="2xl" my="3">
              1000+ people believed in us
            </Heading>
            <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae quo obcaecati in earum suscipit? Similique odio
              officia deserunt exercitationem fugit, voluptate aperiam
              consequatur illum provident nostrum, explicabo at quaerat! Quas.
            </Text>
          </Box>
          <Image
            source={require("./../assets/reviewBanner.png")}
            w="100%"
            h="160"
            resizeMode="contain"
            alt="image"
          />
        </Box>
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
});
