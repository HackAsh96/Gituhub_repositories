import { GET_ALL_REPOS,ReposInterface, ReposActionTypes } from '../types';
import { request, failure, success } from './common.actions';
import { ActionCreator } from 'redux';
import { githubService } from '../../services/repositories.service';
import { Alert } from 'react-native';
import store from '../store';

const getAllReposSuccess: ActionCreator<ReposActionTypes> = (repos: ReposInterface[]) => {
  return { type: GET_ALL_REPOS, payload: repos };
}

export const getRepositories:any=()=> {
  return (dispatch: any) => {
      dispatch(request());
      try {
          return githubService
          .getAllRepos()
              .then((response: any) => {
                dispatch(getAllReposSuccess(response.data.items))
                dispatch(success())
              }, (error: any) => {
                Alert.alert('Error message', 'Please refresh the app', [
          {text:'ok',style:'cancel'}
        ])
                dispatch(failure(error))
              })
      }
      catch (error) {
        Alert.alert('Error message', 'Please refresh the app', [
          {text:'Refresh',onPress:()=>store.dispatch(getRepositories()),style:'cancel'}
        ])
      }
  }
}
