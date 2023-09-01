
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Login, MenuScreen, Welcome } from '../screens'
import { SectionA } from '../component'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Welcome' component={Welcome} />
        <Drawer.Screen name='Menu' component={MenuScreen} />
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Section' component={SectionA} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation