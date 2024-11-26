import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './Screens/Index';

export type ScreenType ={
    Home: any;
    Login: any;
}
const Stack = createNativeStackNavigator<ScreenType>();
const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{headerShown:false}}
            initialRouteName='Login'>
            <Stack.Screen name ={'Login'} component ={Login}/>
            <Stack.Screen name={"Home"} component={Home}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes