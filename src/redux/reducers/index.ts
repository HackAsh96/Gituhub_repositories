import { combineReducers } from 'redux';
import RepositoriesReducer from './repositories.reducer'
import RefreshAPIReducer from './refreshAPI.reducer'

export const rootReducer = combineReducers({
    repositories: RepositoriesReducer,
    loadingAPI:RefreshAPIReducer
})

export type RootState = ReturnType<typeof rootReducer>;