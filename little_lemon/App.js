import * as React from "react";
import { View } from "react-native";

import { Footer, Header } from "./component";
import { Welcome } from "./screens";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
          // flex:0.5
        }}
      >
        <Header />
        <Welcome />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View>
      <StatusBar style="auto" />
    </>
  );
}
