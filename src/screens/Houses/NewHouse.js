import React from 'react';
import {View, Text, Button } from 'react-native';
import FormTextInput from '../../components/FormTextInput';
import { connect } from 'react-redux';
import { addHouse } from '../../store/actions/houses/actions';

class NewHouseScreen extends React.Component {
    static navigationOptions = {
        title: 'New House Page',
      };
      state={
        name:"",
        description:""
      }
      goBack = () => {
        this.props.navigation.goBack(null);
      }
      addHouse = () => {
        this.props.addHouse(this.state.name, this.state.description).then(res=>res && this.props.navigation.goBack(null))
      }
      changeTexthandler= (value, key) => this.setState({[key]:value})
    render() {
      return (
        <View style={{ flex: 1}}>
          <Text>New House Screen</Text>
          <FormTextInput value={this.state.name} placeholder="House Name" onChangeText={(value)=>this.changeTexthandler(value,"name")}/> 
          <FormTextInput value={this.state.description} placeholder="Description" onChangeText={(value)=>this.changeTexthandler(value,"description")}/> 
          <Button title="Save" onPress={this.addHouse}/>
          <Button title="Go Back" onPress={this.goBack}/>
        </View>
      );
    }
  }
  const mapDispatchToProps = dispatch => ({
    addHouse : (...args) => dispatch(addHouse(...args))
  })

  export default connect(null,mapDispatchToProps)( NewHouseScreen) ;