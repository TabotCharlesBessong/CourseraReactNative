import { useState } from "react";
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Pressable, View } from "react-native";

const LoginScreen = () => {
  const [email,onChangeEmail] = useState("")
  const [password,onChangePassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: 24 }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {!loggedIn && (
          <View>

          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="enter your email address"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="enter your password"
            // keyboardType="email"
            secureTextEntry
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              setLoggedIn(true);
            }}
          >
            <Text style={styles.buttonText}>
              Log in
            </Text>
          </Pressable>
          </View>

        )}
        {loggedIn && (
          <Text style={styles.headerText} >
            You are logged in
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    // alignItems: 'center', 
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 0,
    borderRadius: 36,
    paddingHorizontal: 4,
    width: 280,
    // backgroundColor: "#EE9972",
    left:28
  },
});

export default LoginScreen