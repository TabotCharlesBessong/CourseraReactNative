
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SectionA,SectionLists,MenuItem } from '../component'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <View  >
      <Tab.Navigator screenOptions={{
        bottom:0,
        // posi 
      }} >
        <Tab.Screen name='sectionA' component={SectionA}  />
        <Tab.Screen name='sectionL' component={SectionLists}  />
        <Tab.Screen name='MenuI' component={MenuItem}  />
      </Tab.Navigator>
    </View>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})