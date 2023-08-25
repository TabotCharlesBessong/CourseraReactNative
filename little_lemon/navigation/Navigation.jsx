import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, MenuScreen, Welcome } from "../screens";
import { SectionLists } from "../component";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: "false",
          headerStyle: { backgroundColor: "#FBDABB" },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome Screen" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login Screen" }}
        />
        <Stack.Screen
          name="Menu"
          component={SectionLists}
          options={{ title: "Menu Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
