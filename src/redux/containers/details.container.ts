import { connect } from 'react-redux';
import DetailsScreen from '../../screens/DetailsScreen';
import {getRepositories,removeRepoFromFavoriteList,addRepoToFavoriteList} from '../actions'
import { RootState } from '../reducers';

const mapStateToProps = (state:RootState) => {
  return {
    allRepos: state.repositories.allRepos,
    favoriteRepos: state.favoritesRepositories.favoriteRepos,
  };
};
const mapDispatchToProps = {
  addRepoToFavoriteList,
  removeRepoFromFavoriteList,
  getRepositories
};

export default connect(mapStateToProps,mapDispatchToProps)(DetailsScreen);