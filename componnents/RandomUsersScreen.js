import { StyleSheet, Text, View,FlatList,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const RandomUsersScreen = () => {
    const[user,setUser] = useState([]);
    const[loding,setLoding] = useState(true);

    const fetchUser = async()=>{
        try{
        //    const response = await fetch('https://randomuser.me/api/?results=15');
        //    const data = await response.json();
        //    setUser(data.results);
        const response = await axios.get('https://randomuser.me/api/?results=15');
           setUser(response.data.results);
           setLoding(false) ;
        }catch(error){
           console.error('Error fetching users: ',error)
           setLoding(false) ;
        }
    }
    
    useEffect(()=>{
       fetchUser();
    },{})

  return (
    <View style = {{justifyContent:'center',marginLeft:10}}>
         {
           loding? (
             <ActivityIndicator size="large" color="#0000ff"/>
           )
           : (
             <FlatList
               data={user}
               renderItem={({item}) =>(
                 <View style={{marginVertical:10}}>
                    <Text>{`${item.name.first} ${item.name.last}`}</Text>
                    
                    <Text>{item.email}</Text>

                 </View>
               )}
               keyExtractor={(index) => index.toString()}
             />
           )
         }
    </View>
  )
}

export default RandomUsersScreen

const styles = StyleSheet.create({})