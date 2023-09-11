
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>little</Text>
        <Image
          source={require("../assets/images/littleLemonbg.png")}
          style={styles.image}
        />
        <Text style={styles.imageText}>lemon</Text>
      </View>
      <Text style={styles.welcomeText}>
        Little Lemon, your local Mediterenean Bistro
      </Text>

      <View style={styles.newsLetter}>
        <TouchableOpacity onPress={() => navigation.navigate("Subscribe")} style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text
            style={{
              color: "#fff",
              textTransform: "capitalize",
              letterSpacing: 1,
            }}
          >
            newsletter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    alignItems: "justify-around",
    justifyContent: "center",
    marginHorizontal: "auto",
    paddingHorizontal: "auto",
  },
  image: {
    width: 250,
    height: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 70,
    marginHorizontal: 80,
  },
  welcomeText: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 24,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  newsLetter: {
    // bottom:20,
    width: "80%",
    backgroundColor: "green",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal:12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  imageText: {
    textTransform: "uppercase",
    marginVertical: 12,
    textAlign: "center",
    // color: '#EDEFEE',
    fontSize: 32,
    fontWeight: "800",
  },
});