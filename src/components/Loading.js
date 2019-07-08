import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import colors from '../config/colors';
export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}><Text style={{color:colors.DODGER_BLUE, fontSize: 40}}>{this.props.message || "Loading"}</Text><ActivityIndicator color={colors.DODGER_BLUE} size="large" /></View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})