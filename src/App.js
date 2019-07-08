/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import { connect } from "react-redux";
import {
  DashboardScreen,
  ProfileScreen,
  DecisionsScreen,
  DrawerScreen,
  SpendingsScreen,
  LoginScreen,
  HousesScreen,
  RegisterScreen,
  NewHouseScreen
} from "./screens";
import { setAuth } from "./store/actions/session/actions";
import Firebase from "./services/firebase";
import NavigationService from "./services/navigation-service";

import Icon from "react-native-vector-icons/FontAwesome";

const tabsDefaultNavigationOptions = ({ navigation }) => ({
  headerLeft: (
    <Icon
      name="bars"
      size={30}
      style={{ marginLeft: 16 }}
      onPress={navigation.openDrawer}
    />
  ),
  title: navigation.state.routeName || "sefa"
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: tabsDefaultNavigationOptions
  }
});
const DecisionsStack = createStackNavigator({
  Decisions: {
    screen: DecisionsScreen,
    navigationOptions: tabsDefaultNavigationOptions
  }
});
const SpendingsStack = createStackNavigator({
  Spendings: {
    screen: SpendingsScreen,
    navigationOptions: tabsDefaultNavigationOptions
  }
});
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

const HousesStack = createStackNavigator({
  Houses:HousesScreen,
  NewHouse:NewHouseScreen
})
const Tabs = createBottomTabNavigator(
  {
    DashboardTab: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarIcon: <Icon name="rocket" />
      }
    },
    SpendingsTab: {
      screen: SpendingsStack,
      navigationOptions: {
        tabBarIcon: <Icon name="money" />
      }
    },
    DecisionsTab: {
      screen: DecisionsStack,
      navigationOptions: {
        tabBarIcon: <Icon name="meetup" />
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Tabs,
    Profile: ProfileStack,
    Houses:HousesStack
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerWidth: 300
  }
);

const LoginStack = createStackNavigator(
  {
    Login:LoginScreen,
    Register:RegisterScreen
  },
  {
    headerMode: "none"
  }
);
const Switch = createSwitchNavigator(
  {
    LoginStack,
    DrawerNavigator
  },
  {
    initialRouteName: "LoginStack"
  }
);
const App = createAppContainer(Switch);

class Navigation extends React.Component {
  navigator = React.createRef();
  _sessionStateUnsubscribe;
  componentDidMount() {
    this._sessionStateUnsubscribe = Firebase.auth.onAuthStateChanged(user => {
      this.props.setAuth(user);
      NavigationService.navigate(user ? "DrawerNavigator" : "Login");
    });
  }
  componentWillUnmount() {
    this._sessionStateUnsubscribe();
  }
  render() {
    return (
      <App
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  setAuth: user => dispatch(setAuth(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
