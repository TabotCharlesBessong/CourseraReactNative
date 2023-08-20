import * as React from "react";
import { View } from "react-native";

import { Footer, Header } from "./component";
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
          flex:0.5
        }}
      >
        <Header />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        {/* <Footer /> */}
      </View>
    </>
  );
}
