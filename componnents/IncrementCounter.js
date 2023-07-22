import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {
    const [age,setAge] = useState(23);

   
    
  return (
    <View>
      <Text style={{fontSize:24,fontStyle:'bold'}}>
        Your age: {age}
      </Text>
      <Text>{'\n\n'}</Text>
      <Button 
      title='+3'
      onPress ={()=>{setAge(age+3)}}
      />
      <Text>{'\n\n'}</Text>
       <Button 
      title='+1'
      onPress ={()=>{setAge(age+1)}}
      />
    </View>
  )
}

export default IncrementCounter

const styles = StyleSheet.create({})