
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer} >
        <Image source={require('../assets/images/littleLemonbg.png')} style={styles.image} />
      </View>
      <Text style={styles.welcomeText} >Little Lemon, your local Mediterenean Bistro</Text>

      <View style={styles.newsLetter} >
        <TouchableOpacity>
          <Text style={{
            color:'#fff',
            textTransform:'capitalize',
            // letterSpacing:1
          }} >
            newsletter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    alignItems:'justify-around',
    justifyContent:'center',
    marginHorizontal:'auto',
    paddingHorizontal:'auto'
  },
  image:{
    width:200,
    height:200
  },
  imageContainer:{
    justifyContent:'center',
    alignContent:'center',
    marginTop:70,
    marginHorizontal:80
  },
  welcomeText:{
    marginTop:60,
    textAlign:'center',
    fontSize:24
  },
  newsLetter:{
    // bottom:20,
    width:'100%',
    backgroundColor:'red',
    marginTop:260,
    alignItems:'center',
    justifyContent: 'center',
    // marginHorizontal:12,
    paddingVertical:8,
    borderRadius:8
  }
})