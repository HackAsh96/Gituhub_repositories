import { connect } from 'react-redux';
import HomeScreen from '../../screens/HomeScreen';
import {getRepositories} from '../actions'
import { RootState } from '../reducers';

const mapStateToProps = (state:RootState) => {
  return {
    allRepos: state.repositories.allRepos
  };
};
const mapDispatchToProps = {
  getRepositories
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);