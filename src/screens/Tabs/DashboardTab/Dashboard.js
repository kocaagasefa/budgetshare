import React from 'react';
import {View, Text, Button } from 'react-native';

class DashboardScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
          <Text>Home Screen</Text>
          <Button title="Change Title" onPress={()=>this.props.navigation.setParams({title:"changed"})}/>
          <Button title="Go Decision" onPress={()=> this.props.navigation.navigate({routeName:"Decisions"})}/>
        </View>
      );
    }
  }

  export default DashboardScreen;