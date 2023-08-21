
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true} indicatorStyle={"white"} >
      <Text style={styles.text1} >Welcome to the little lemon</Text>
      <Text style={styles.text2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet, beatae error quos in maiores nesciunt maxime nostrum voluptatibus vero quae harum debitis adipisci sit, velit autem, fugit ipsa saepe.</Text>
    </ScrollView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#333"
  },
  text1: {
    color: "white",
    marginVertical: 24,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  text2: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'white'
  }
});