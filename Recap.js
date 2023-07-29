import { StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React,{useState} from 'react'

const Recap = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Alert = () =>{
    alert('Email : '+email+
    '\nPassword : '+password);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Email'
        style={styles.input}
        value={email}
        onChangeText={(value)=>{
          setEmail(value)
        }}
      />
      <Text>{'\n'}</Text>
      <TextInput 
        placeholder='Password'
        style={styles.input}
        value={password}
        onChangeText={(value)=>{
          setPassword(value)
        }}
      />
      <Button style={styles.submitButton}
        title='Submit'
        onPress={() => Alert()}
      />
    </View>
  )
}

export default Recap

const styles = StyleSheet.create({
  container:{
    paddingTop:23
  },
  input:{
    margin:15,
    height:40,
    borderColor:'#7a42f4',
    borderWidth: 1
  },
  submitButton:{
    backgroundColor:'#7a42f4',
    padding:10,
    margin:15,
    height:40
  },
  submitButtonText:{
    color:'white'
  },
})