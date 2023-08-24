import { useState } from "react";
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput } from "react-native";

const LoginScreen = () => {
  const [email,onChangeEmail] = useState("")
  const [password,onChangePassword] = useState("")
  return (
    <KeyboardAvoidingView
      style={[styles.container,{paddingTop:24}]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
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
});

export default LoginScreen