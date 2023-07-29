import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Recap from './Homework/Recap'

const App = () => {
  return (
    <View>
      <Recap/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   },
})