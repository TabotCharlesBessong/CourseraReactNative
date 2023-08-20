
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View>
      <Text style={styles.text1} >Welcome to the little lemon</Text>
      <Text style={styles.text2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe earum vitae quod animi iste mollitia illum ipsum. Quae, sequi.</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // bottom:20 
  },
  text1: {
    color: "white",
    marginVertical: 24,
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  text2: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 12,
  },
});