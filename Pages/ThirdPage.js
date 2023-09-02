import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Third Page</Text>
      <Text>{"\n"}</Text>
      <Button title="GO BACK" onPress={() => navigation.goBack("SecondPage")} />
      <Text>{"\n"}</Text>
      <Button
        title="GO TO SECOND PAGE"
        onPress={() => navigation.navigate("SecondPage")}
      />
      <Text>{"\n"}</Text>
      <Button
        title="RESET NAVIGATOR TO FIRST PAGE"
        onPress={() => navigation.navigate("FirstPage")}
      />
    </View>
  );
};
export default ThirdPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
});