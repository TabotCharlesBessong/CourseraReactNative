import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.textStyle} >Welcome To The Little Lemon</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EE9972",
    paddingVertical: 8,
    marginTop: 16,
  },
  textStyle: {
    fontSize: 22,
  },
});