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
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#F4CE14",
    paddingVertical:8
  },
  textStyle:{
    fontSize:22
  }
})