import { SEARCH_REPOSITORIES } from '.';

import api from '../services/api';

export function searchRepositorie(value) {
    return (dispatch) => {
        return api.get(`repos/${value}`).then((response) => {

            let repositorie = {
                full_name: '',
                description: '',
                owner: {
                    login: '',
                    avatar_url: ''
                }
            };

            repositorie.full_name = response.data.full_name;
            repositorie.description = response.data.description;
            repositorie.owner.login = response.data.owner.login;
            repositorie.owner.avatar_url = response.data.owner.avatar_url;

            dispatch({
                type: SEARCH_REPOSITORIES, repositorie
            });
        });
    }
};