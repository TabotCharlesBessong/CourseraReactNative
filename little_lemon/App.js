import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Footer, Header, MenuItem } from "./component";
import { Welcome } from "./screens";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        {/* <Welcome /> */}
        <MenuItem />
      </View>
      <View style={{ backgroundColor: "#EE9972" }}>
        <Footer />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE9972",
  },
});
