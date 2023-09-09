import { View, Text , Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen'
import IndexScreen from'./Screen/IndexScreen'
import CreatePostScreen from './Screen/CreatePostScreen'

 const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator 
       mode ='model'
       screenOptions={{
        headerStyle:{
        backgroundColor:'#FF9990'
        },
        headerTitleStyle:{
        fontWeight:'bold',
      }
      }}>
       <Stack.Screen name ='Index' component={IndexScreen} 
       options={{title:'MainPage'}}/>
       <Stack.Screen name ='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default App
