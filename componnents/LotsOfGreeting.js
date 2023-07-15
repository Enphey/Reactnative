import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{
    return(
        <View>
            <text>Hello {props.name}</text>
        </View>
    )
    };

const LotsOfGreeting = () => {
  return (
    <View style={{alignItems:'center',top:20}}>
        <Greeting name ="Marry Christmas"/>
        <Greeting name = "Happy New Year"/>
        <Greeting name = "Songkarn Festival"/>
    </View>
  )
}

export default LotsOfGreeting