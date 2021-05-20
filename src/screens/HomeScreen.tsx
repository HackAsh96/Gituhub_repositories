import * as React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import ReposListCard from '../components/ReposListCard';
import Colors from '../constants/Colors';
import { ReposInterface } from '../redux/types';

interface IHomeProps {
  getRepositories: any,
  allRepos: ReposInterface[],
  isLoading: boolean,
  navigation: {
    navigate: any
  }
}
export default class HomeScreen extends React.Component<IHomeProps>{
  componentDidMount() {
    this.props.getRepositories()
  }
  _renderReposCard = ({ item }: any) => {
    return <ReposListCard
      data={item}
      openDetailScreen={(id: number | string) => this.props.navigation.navigate('Detail', { itemId: id })}
    />
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
