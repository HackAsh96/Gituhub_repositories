import { ADD_FAVORITE_REPO,FavoriteRepoActionTypes, FavoriteRepoInterface, REMOVE_FAVORITE_REPO } from '../types';
import { ActionCreator } from 'redux';

const addFavorite: ActionCreator<FavoriteRepoActionTypes> = (repo: FavoriteRepoInterface) => {
  return { type: ADD_FAVORITE_REPO, payload: repo };
}
const removeFavorite: ActionCreator<FavoriteRepoActionTypes> = (id:number|string) => {
  return { type: REMOVE_FAVORITE_REPO, payload: id };
}

export const addRepoToFavoriteList = (repo: object) => {
    return (dispatch: any) => {
      dispatch(addFavorite(repo))
  }
}
export const removeRepoFromFavoriteList = (id:number|string) => {
    return (dispatch: any) => {
      dispatch(removeFavorite(id))
  }
}