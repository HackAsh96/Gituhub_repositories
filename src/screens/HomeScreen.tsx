import * as React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component<{}, {}>{
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>)
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Colors.slateGray
  }
});
