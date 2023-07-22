import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React,{useState} from 'react'

const Form = () => {

    const[name,setName] =useState('Taylor')
    const [age,setAge] =useState(42)
  return (
    <View style={styles.container}>
       <TextInput
         placeholder='Enter Text'
         style = {styles.TextInputStyle}
         value = {name}
         onChangeText={(value)=>{setName(value)}}
         />

        <Text>{'\n\n'}</Text>

      <Button 
      title='INCREMENT'
      onPress ={()=>{setAge(age+1)}}
      />

        <Text>{'\n\n'}Hello, {name}. You are {age}.</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    TextInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15,
    }
})