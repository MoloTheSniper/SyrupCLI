import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './Screens/Index';
import Details from './Screens/Details';
import List from './Screens/List';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';

export type ScreenType ={
    Home: any;
    Login: any;
    Inside : any;
    Details : any;
}
const Stack = createNativeStackNavigator<ScreenType>();

const InsideStack = createNativeStackNavigator();

function InsideLayout()
{
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name = "My todos" component={List}/>
      <InsideStack.Screen name = "details" component={Details}/>
    </InsideStack.Navigator>
  )
}
const Routes = () => {

  const [user,setUser] = useState<User | null>(null);

useEffect(() =>{
  onAuthStateChanged(FIREBASE_AUTH, (user)=>{
    console.log('user', user)
    setUser(user);
  })
},[])
  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{headerShown:false}}
            initialRouteName='Login'>
              {user ? (
                <Stack.Screen name ="Inside" component ={InsideLayout}
                options = {{headerShown: false}}/>  
              ) : (
                <Stack.Screen name ="Login" component ={Login}
                options = {{headerShown: false}}/>               
              )}
            {/*<Stack.Screen name ={'Login'} component ={Login}/>*/}
            <Stack.Screen name={"Home"} component={Home}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default  Routes

