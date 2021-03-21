import { LIST_REPOSITORIES } from '../actions';

const initialState = {
    repositorie: ''
};

export const listRepositoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_REPOSITORIES:
            return {
                ...state,
                // repositorie: action.repositorie
            };
        default:
            return state;
    }
};