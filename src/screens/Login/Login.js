import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../../components/Button";
import FormTextInput from "../../components/FormTextInput";
import Loading from '../../components/Loading';
import imageLogo from "../../assets/images/logo.png";
import colors from "../../config/colors";
import strings from "../../config/strings";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/session/actions';
import { SESSION } from '../../store/actions/session/actionTypes';

class LoginScreen extends React.Component {
      state = {
      email: "kocaagasefa@gmail.com",
      password: "12345678"
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
  
    handleLoginPress = () => {
      const {email, password} = this.state;
      this.props.signIn(email, password);
    };
    handleRegister = () => {
      this.props.navigation.navigate("Register");
    }
  
    render() {
      return (
        <View style={styles.container}>
          {
            this.props.loading?<Loading message="Signing In..."/>:
            <>
          <Image source={imageLogo} style={styles.logo} />
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
            <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
            <Text>Not A Member? <Text onPress={this.handleRegister}>Register Now</Text></Text>
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
    signIn : (email,password) => dispatch(signIn(email,password))
  })
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);