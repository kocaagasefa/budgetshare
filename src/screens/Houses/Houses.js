import React from 'react';
import {View, Text, Button } from 'react-native';

class HousesScreen extends React.Component {
    static navigationOptions = {
        title: 'Houses Page',
      };
      goBack = () => {
        this.props.navigation.goBack(null);
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Button title="New House" onPress={()=>this.props.navigation.navigate("NewHouse")}/>
          <Text>Houses Screen</Text>

          <Button title="Go Back" onPress={this.goBack}/>
        </View>
      );
    }
  }

  export default HousesScreen;