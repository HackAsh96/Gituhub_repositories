import { combineReducers } from 'redux';
import RepositoriesReducer from './repositories.reducer'
import RefreshAPIReducer from './refreshAPI.reducer'
import FavoriteRepositoriesReducer from './favorites.reducer'

export const rootReducer = combineReducers({
    repositories: RepositoriesReducer,
    favoritesRepositories:FavoriteRepositoriesReducer,
    loadingAPI:RefreshAPIReducer
})

export type RootState = ReturnType<typeof rootReducer>;