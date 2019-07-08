import React from 'react';
import {View, Text, Button } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile Page',
      };
      goBack = () => {
        this.props.navigation.goBack(null);
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Profile Screen</Text>
          <Button title="Go Back" onPress={this.goBack}/>
        </View>
      );
    }
  }

  export default ProfileScreen;