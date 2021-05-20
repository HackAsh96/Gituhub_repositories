import { FavoriteRepoInterface,FavoriteRepoActionTypes,ADD_FAVORITE_REPO,REMOVE_FAVORITE_REPO } from '../types';

interface FavoriteReposState {
  favoriteRepos: FavoriteRepoInterface[]
}

const initialState: FavoriteReposState = {
  favoriteRepos: []
};

export default function reducer(state: FavoriteReposState = initialState, action: FavoriteRepoActionTypes): FavoriteReposState {
  switch (action.type) {
      case ADD_FAVORITE_REPO:
          let addedItem = state.favoriteRepos
          if (!addedItem.includes(action.payload)) {
              addedItem.push(action.payload)
          }
          return Object.assign({}, state, {
          favoriteRepos: addedItem.slice(0)
          })
      case REMOVE_FAVORITE_REPO:
          const indexOfRepo=state.favoriteRepos.findIndex((item:any)=>item.id===action.payload)
          const newFavoriteList=state.favoriteRepos.splice(indexOfRepo,1)
          return Object.assign({}, state, {
              favoriteRepos:newFavoriteList
          })
    default:
      return state
  }
};