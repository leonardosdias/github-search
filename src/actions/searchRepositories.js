import { SEARCH_REPOSITORIES } from '.';

import api from '../services/api';

export function searchRepositorie(value) {
    return (dispatch) => {
        return api.get(`users/${value}/repos`).then((response) => {
            dispatch({
                type: SEARCH_REPOSITORIES, repositories: response.data
            });
        });
    }
};