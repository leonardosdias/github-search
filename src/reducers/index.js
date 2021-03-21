import { searchRepositorieReducer } from './searchRepositoriesReducer';
import { detailRepositorieReducer } from './detailRepositorieReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    initialRepositoriesState: searchRepositorieReducer,
    detailRepositorieState: detailRepositorieReducer,
});