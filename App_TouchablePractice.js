import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './componnents/TouchablePractice '

const App = () => {
  return (
    <View style={styles.container}>
     <TouchablePractice/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})