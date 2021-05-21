import * as React from 'react';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import NoElementComponent from '../components/NoElement';
import ReposListCard from '../components/ReposListCard';
import Colors from '../constants/Colors';
import { FavoriteRepoInterface } from '../redux/types';

interface IFavoriteRepos {
  favoriteRepos: FavoriteRepoInterface[]
  getRepositories: any,
  isLoading: boolean,
  navigation: {
    navigate: any
  }
}
export default class FavoriteScreen extends React.Component<IFavoriteRepos>{
  _renderReposCard = ({ item }: any) => {
    return <ReposListCard
      data={item}
      openDetailScreen={(id: number | string) => this.props.navigation.navigate('Detail', { itemId: id })}
    />
  }
  render() {
    const { favoriteRepos, isLoading, getRepositories } = this.props
    if (favoriteRepos.length === 0) {
      return <NoElementComponent text='No favorites' isRefresh={false} />
    }
    return (
      <FlatList
        refreshControl={<RefreshControl
          tintColor={Colors.gray}
          refreshing={isLoading}
          onRefresh={getRepositories} />}
        keyExtractor={() => Math.random().toString()}
        data={favoriteRepos}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={true}
        indicatorStyle='black'
        renderItem={this._renderReposCard}
      />
    )
  }
}

