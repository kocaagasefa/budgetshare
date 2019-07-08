import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../../components/Button";
import FormTextInput from "../../components/FormTextInput";
import Loading from '../../components/Loading';
import colors from "../../config/colors";
import strings from "../../config/strings";
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/session/actions';
import { SESSION } from '../../store/actions/session/actionTypes';

class LoginScreen extends React.Component {
      state = {
      email: "kocaagasefa@gmail.com",
      password: "12345678",
      confirmPassword:"12345678"
    };
    static navigationOptions = ({navigation}) => ({
       // header:null
    })
    handleEmailChange = (email) => {
      this.setState({ email });
    };
  
    handlePasswordChange = (password) => {
      this.setState({ password });
    };
    handleConfirmPassword = (confirmPassword) => {
      this.setState({confirmPassword})
    }
    handleSignUpPress = () => {
      const {email, password} = this.state;
      this.props.signUp(email, password);
    };
    handleLogin = () => {
      this.props.navigation.goBack(null);
    }
  
    render() {
      return (
        <View style={styles.container}>
          {
            this.props.loading?<Loading message="Registering..."/>:
            <>
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={strings.EMAIL_PLACEHOLDER}
              />
            <FormTextInput
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              />
            <FormTextInput
              value={this.state.confirmPassword}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              />
            <Button label={strings.REGISTER} onPress={this.handleSignUpPress} />
            <Text>Do you have an account? <Text onPress={this.handleLogin}>Login</Text></Text>
          </View>
          </>
          }
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    }
  });
  const mapStateToProps = state => ({
    loading: state.loading[SESSION]
  })

  const mapDispatchToProps = dispatch => ({
    signUp : (email,password) => dispatch(signUp(email,password))
  })
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);