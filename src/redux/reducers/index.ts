import { combineReducers } from 'redux';
import RepositoriesReducer from './repositories.reducer'

export const rootReducer = combineReducers({
    repositories:RepositoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>;