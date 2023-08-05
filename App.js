import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './componnents/TouchablePractice '
import Example_useEffect from './componnents/Example_useEffect'
import UseEffectFlatList from './componnents/UseEffectFlatList'

const App = () => {
  return (
    <View style={styles.container}>
     {/* <TouchablePractice/> */}
     {/* <Example_useEffect/> */}
     <UseEffectFlatList/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})