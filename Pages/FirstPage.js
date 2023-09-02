import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>FirstPage</Text>
      <Button
        title="Go to SecondPage"
        onPress={() => navigation.navigate("SecondPage")}
      />
    </View>
  );
};

export default FirstPage;
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