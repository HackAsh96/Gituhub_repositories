import * as React from 'react';
import { FlatList, RefreshControl, ScrollView, View } from 'react-native';
// import ListLoader from '../components/LoaderCard';
import NoElementComponent from '../components/NoElement';
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
  _renderReposCard = ({ item }: any) => {
    return <ReposListCard
      data={item}
      openDetailScreen={(id: number | string) => this.props.navigation.navigate('Detail', { itemId: id })}
    />
  }
  render() {
    const { isLoading, getRepositories, allRepos } = this.props
    if (allRepos.length === 0) {
      return <NoElementComponent text='No data, please refresh' />
    }
    // if (isLoading) return <ScrollView
    //   refreshControl={
    //     <RefreshControl
    //       tintColor={Colors.gray}
    //       refreshing={isLoading}
    //       onRefresh={getRepositories} />
    //   }
    //   style={{ marginTop: 40, flex: 1 }}>
    //   <View style={{ flex: 1, height: Dimensions.get('window').height }}>
    //     <ListLoader />
    //   </View>
    // </ScrollView>
    return (
      <FlatList
        refreshControl={<RefreshControl
          tintColor={Colors.gray}
          refreshing={isLoading}
          onRefresh={getRepositories} />}
        keyExtractor={() => Math.random().toString()}
        data={allRepos}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={true}
        indicatorStyle='black'
        renderItem={this._renderReposCard}
      />
    )
  }
}
