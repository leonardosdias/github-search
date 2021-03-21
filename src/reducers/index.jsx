import { searchRepositorieReducer } from './searchRepositoriesReducer';
import { listRepositoriesReducer } from './listRepositoriesReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    initialRepositorieState: searchRepositorieReducer,
    detailRepositorieState: listRepositoriesReducer,
});