import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import images from "../constant/images";

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        accessible={true}
        source={images.littlelemon}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <ImageBackground
        style={{
          flex: 1,
          height: 420,
          marginVertical: 16,
          // padding: 8,
          justifyContent: "center",
        }}
        source={images.littleLemonbg}
        resizeMethod="contain"
      >
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </ImageBackground>
      <Image
        style={styles.image}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
        source={images.picture}
        resizeMethod="repeat"
      />
      <Image
        style={styles.image}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
        source={images.picture1}
      />
      <Image
        style={styles.image}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
        source={images.picture2}
      />
      <Image
        style={styles.image}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
        source={images.picture3}
      />
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 20,
    marginVertical: 8,
    flex:1
  },
});
