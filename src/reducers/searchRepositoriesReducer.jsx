import { SEARCH_REPOSITORIES } from '../actions';

const initialState = {
    repositorie: ''
};

export const searchRepositorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {
                ...state,
                repositorie: action.repositorie
            };
        default:
            return state;
    }
};