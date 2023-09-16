import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import{createNativeStackNavigator} from '@react-navigation/native-stack'

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'

import CustomSideBarMenu from './Pages/CustomSideBarMenu';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function FirstScreenStack(){
  return(
    <Stack.Navigator
     screenOptions={{headerShown:false}}
    >
      <Stack.Screen name ='FirstPage' 
      component={FirstPage}
      />
    </Stack.Navigator>
  )
}

function SecondScreenStack(){
  return(
    <Stack.Navigator
     screenOptions={{headerShown:false}}
    >
      <Stack.Screen name ='SecondPage' component={SecondPage}/>
    </Stack.Navigator>
  )
}



function MyDrawer(){
  return(
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#d5f0fa',
          width:240,
        },
      }}
      drawerContent={(props)=><CustomSideBarMenu{...props}/>}

    >
      <Drawer.Screen 
      name ='FirstDrawer' 
      component={FirstScreenStack}
      options={{drawerLabel:'First Page Option'}}
      />
      <Drawer.Screen 
       name ='SecondDrawer'
       component={SecondScreenStack}
       options={{drawerLabel:'Second Page Option'}}
      />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App