import { StyleSheet, Text, View,SafeAreaView,ActivityIndicator,FlatList, RefreshControl } from 'react-native'
import React ,{useState,useEffect} from 'react'

const FlatListAPI = () => {

    const [refreshing, setRefreshing] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
      getData();
  
    }, []);
  
    // service to get the data from the server to render
  
    const getData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
  
        .then((response) => response.json())
        .then((responseJson) => {
  
          setDataSource(responseJson);
          setRefreshing(false);
  
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const getItem = (item) => {
      alert("id " + item.id + " Title : " + item.title);
  
    };
  
    const ItemView = ({ item }) => {
  
      return (
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.title}
        </Text>
      );
    };
  
    const ItemSeparatorView = () => {
  
      return (
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#C8C8C8",
          }}
  
        />
      );
    };
  
    const onRefresh = () => {
  
      // Clear Old Data of the list
      setDataSource([]);
      // Call the service to get the latest data
      getData();
  
    };
  
   
  
    return (
  
      <SafeAreaView style={{ flex: 1 }}>
  
        <View style={styles.container}>
          {refreshing ? <ActivityIndicator /> : null}
          <FlatList
            data={dataSource}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </SafeAreaView>
  
    );
  
  };
  
  export default FlatListAPI;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
      marginTop: 10,
    },
  
    itemStyle: {
      fontSize: 20,
      padding: 10,
    },
  
  });
