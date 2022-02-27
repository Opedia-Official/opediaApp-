import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from 'react'
import { Image, ScrollView, Text,VStack, View, Heading } from 'native-base';


const images = [
    "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
    "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
    "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
  ];

  
export default function ReviewSlider() {
    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {};
  
    return (
      <VStack my="5">
        <View style={styles.wrap}>
          {/* <ServicesSlider /> */}
          <Heading ResponsiveValue="container" textAlign="center" fontSize="lg" mb='5' bold>
          Review
        </Heading> 
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            alwaysBounceHorizontal ={true}
            scrollEnabled ={true}
            showsHorizontalScrollIndicator ={true}
            style={styles.wrap}
          >
            {images.map((image, index) => (
              <View key={index}>
               <View>
               <Image
                  style={styles.image}
                  key={index}
                  resizeMode="stretch"
                  source={{ uri: image }}
                />
               </View>
                {/* <Text p='5' alignItems="center" */}
                 <Text style={styles.wrapText} alignItems="center"
          textAlign="center">lorem  on a  but not scrollEventThrottle. You will only receive one event. Using 16  you don't need as much precision.</Text>
                <Text  alignItems="center"
          textAlign="center">Dihan abir</Text>
                <Text mb='2' alignItems="center"
          textAlign="center"> Web & Software development </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </VStack>
    );
}


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    wrap: {
      width: WIDTH,
    //   height: HEIGHT * 0.25,
    },
    wrapText: {
      width: WIDTH,
      padding:20
    },
    image:{
        marginTop:15,
        alignSelf: 'center',

        height: 60,
        width: 60,
        borderRadius:50
    }
  });
  