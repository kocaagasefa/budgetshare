import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeListItem = ({ name, description, members }) => (
  <TouchableOpacity onPress={()=> console.log("pressed")}>
    <View style={styles.container}>
      <Icon name="home" size={50} color="#71a0a5" />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderWidth: 2,
    borderColor: "#71a0a5",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row"
  },
  nameContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 20
  }
});
export default HomeListItem;
