import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const BottomTabCustome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: "#000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",

          shadowColor: "#666",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.53,
          shadowRadius: -53.97,

          elevation: 21,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.menuitem}
        >
          <Image
            style={styles.iconsS}
            source={require("../assets/icons/burger_menu_icon.png")}
          />

          <Text style={{ marginTop: 4 }}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={styles.menuitem}
        >
          <Image
            style={styles.iconsS}
            source={require("../assets/icons/home.png")}
          />

          <Text style={{ marginTop: 4 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.menuitem}
        >
          <Image
            style={styles.iconsS}
            source={require("../assets/icons/arrow-left-circle.png")}
          />

          <Text style={{ marginTop: 4 }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabCustome;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -3,
    right: 0,
    left: 0,

    width: "100%",
    height: 80,
    alignItems: "center",
    // margin: 1,
    backgroundColor: "#fff",
  },
  iconsS: {},
  menuitem: {
    backgroundColor: "#fff",
    width: "33.33%",
    textAlign: "center",
    paddingVertical: 28,
    marginEnd: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
