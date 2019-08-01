import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getHouses } from "../../store/actions/houses/actions";
import { GET_HOUSES } from "../../store/actions/houses/actionTypes";
import Loading from "../../components/Loading";
import HomeListItem from "../../components/HomeListItem/HomeListItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

class HousesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Houses here",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("NewHouse")}>
        <Icon name="plus" size={24} style={{marginRight:16}}/>
      </TouchableOpacity>
    )
  });
  state = {
    houses: []
  };
  unsubscribe = () => {}
  // goBack = () => {
  //   this.props.navigation.goBack(null);
  // };
  componentDidMount() {
    this.unsubscribe = this.props.getHouses(houses => {
      console.log("houses screen", houses);
      houses && this.setState({ houses });
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
        {this.props.loading ? (
          <Loading message="Loading houses..." />
        ) : (
          <>
            {this.state.houses.map(house => (
              <HomeListItem key={house.id} {...house} />
            ))}
            <Text>Houses Screen</Text>

            {/* <Button title="Go Back" onPress={this.goBack} /> */}
          </>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading[GET_HOUSES],
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({
  getHouses: (callback) => dispatch(getHouses(callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HousesScreen);
