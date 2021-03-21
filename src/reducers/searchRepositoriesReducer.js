import { SEARCH_REPOSITORIES } from '../actions';

const initialState = {
    repositories: ''
};

export const searchRepositorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {
                ...state,
                repositories: action.repositories
            };
        default:
            return state;
    }
};