import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ReposListCard from '../components/ReposListCard';

interface IHomeProps {
  getRepositories: any,
  allRepos: any[]
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
