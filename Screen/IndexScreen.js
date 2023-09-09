import { View, Text,Button } from 'react-native'
import React from 'react'

const IndexScreen = ({navigation,route}) => {

    React.useEffect(()=>{
        if(route.params?.post){

        }
    },[route.params?.post])

  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Text>{'\n'}</Text>
      <Button
       title='Create'
       onPress={()=>{
        navigation.navigate('CreatePost')
       }}
      />
      <Text style={{margin:10}}>post: {route.params?.post}</Text>
      
    </View>
  )
}

export default IndexScreen