import { SEARCH_REPOSITORIES } from '.';
import { message } from 'antd';

import api from '../services/api';

export function searchRepositorie(username) {
    return (dispatch) => {
        try{
            return api.get(`users/${username}/repos`).then((response) => {
                dispatch({
                    type: SEARCH_REPOSITORIES, repositories: response.data
                });
            });
        }
        catch{
            message.warning('Autor não encontrado.')
        }
    }
};