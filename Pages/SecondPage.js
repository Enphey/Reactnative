import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const SecondPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Second Page</Text>
      <Text>{"\n"}</Text>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <Text>{"\n"}</Text>
      <Button
        title="GO TO SECONDPAGE...AGAIN"
        onPress={() => navigation.push("SecondPage")}
      />
      <Text>{"\n"}</Text>
      <Button
        title="GO TO FIRST PAGE"
        onPress={() => navigation.navigate("FirstPage")}
      />
      <Text>{"\n"}</Text>
      <Button
        title="GO TO THIRD PAGE"
        onPress={() => navigation.navigate("ThirdPage")}
      />
    </View>
  );
};

export default SecondPage;
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