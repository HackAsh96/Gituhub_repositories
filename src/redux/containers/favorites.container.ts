import { connect } from 'react-redux';
import FavoritesScreen from '../../screens/FavoritesScreen';
import {getRepositories} from '../actions'
import { RootState } from '../reducers';

const mapStateToProps = (state:RootState) => {
  return {
    favoriteRepos: state.favoritesRepositories.favoriteRepos,
    isLoading:state.loadingAPI.isLoading
  };
};
const mapDispatchToProps = {
  getRepositories
};

export default connect(mapStateToProps,mapDispatchToProps)(FavoritesScreen);