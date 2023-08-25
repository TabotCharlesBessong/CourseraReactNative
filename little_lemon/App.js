import * as React from "react";
import { StyleSheet, View } from "react-native";

import {
  FeedbackForm,
  Footer,
  Header,
  MenuItem,
  SectionA,
  SectionLists,
} from "./component";
import { Login, Welcome } from "./screens";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        {/* <Welcome /> */}
        {/* <MenuItem /> */}
        {/* <SectionLists /> */}
        {/* <SectionA /> */}
        {/* <FeedbackForm/> */}
        {/* <Login /> */}
        <Navigation/>
        <View style={{ backgroundColor: "#EE9972" }}>
          <Footer />
        </View>
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
