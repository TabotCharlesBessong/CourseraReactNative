import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Subscribe, Welcome } from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          // headerShown: "false",
          headerStyle: { justifyContent: "center",alignItems: "center"},
          headerTintColor:'#000',
          headerTintStyle:{
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome Screen" }}
        />
        <Stack.Screen
          name="Subscribe"
          component={Subscribe}
          options={{ title: "Subscription" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
