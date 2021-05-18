import * as React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import Colors from '../constants/Colors';

export default class FavoritesScreen extends React.Component<{}, {}>{
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
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
    color:Colors.yellowSea
  }
});
