import { DETAIL_REPOSITORIE } from '../actions';

const initialState = {
    repositorie: ''
};

export const detailRepositorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_REPOSITORIE:
            return {
                ...state,
                repositorie: action.repositorie,
                issues: action.issues,
            };
        default:
            return state;
    }
};