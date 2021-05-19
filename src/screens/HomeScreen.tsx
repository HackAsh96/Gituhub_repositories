import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import ReposListCard from '../components/ReposListCard';
import Colors from '../constants/Colors';

interface IHomeProps {
  getRepositories: any,
  allRepos: any[],
  isLoading: boolean
}
export default class HomeScreen extends React.Component<IHomeProps, {}>{
  componentDidMount() {
    this.props.getRepositories()
  }
  _renderReposCard = ({ item }: any) => {
    return <ReposListCard data={item} />
  }
  render() {
    return (
      <FlatList
        refreshControl={<RefreshControl
          tintColor={Colors.gray}
          refreshing={this.props.isLoading}
          onRefresh={this.props.getRepositories} />}
        keyExtractor={() => Math.random().toString()}
        data={this.props.allRepos}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={true}
        indicatorStyle='black'
        renderItem={this._renderReposCard}
      />
    )
  }
}

const styles = StyleSheet.create({});
