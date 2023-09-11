import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, onChangeEmail] = useState('')
  const showAlert = () => {
    Alert.alert(
      "Subscribed Successfully",
      "You have successfully subscribed to our service!",
      [
        {
          text: "OK",
          style: "default",
        },
      ],
      {
        // Apply custom styles to the alert
        containerStyle: styles.alertContainer,
        textContainerStyle: styles.alertText,
      }
    );
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/littleLemonbg.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.welcomeText}>
        Subscribe to our newsletter for our latest delicious recipe
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="enter your email address"
        keyboardType="email-address"
      />
      {/* <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="enter your password"
            // keyboardType="email"
            secureTextEntry
          /> */}
      <Pressable style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText} >Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default Subscribe;

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
    // aspectRatio:1
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 70,
    marginHorizontal: 80,
  },
  welcomeText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    // backgroundColor: "#F4CE14",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    fontSize: 22,
    padding: 4,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 4,
    width: 320,
    backgroundColor: "gray",
    // left: 28,
    // marginHorizontal:'auto',
    alignSelf: "center",
    paddingVertical: 8,
  },
  alertContainer: {
    backgroundColor: "#3498db", // Change to your desired background color
    padding: 20,
    borderRadius: 10,
  },
  alertText: {
    color: "#fff", // Change to your desired text color
    fontSize: 18,
    fontWeight: "bold",
  },
});
