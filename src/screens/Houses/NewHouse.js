import React from 'react';
import {View, Text, Button } from 'react-native';

class NewHouseScreen extends React.Component {
    static navigationOptions = {
        title: 'New House Page',
      };
      goBack = () => {
        this.props.navigation.goBack(null);
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>New House Screen</Text>

          <Button title="Go Back" onPress={this.goBack}/>
        </View>
      );
    }
  }

  export default NewHouseScreen;