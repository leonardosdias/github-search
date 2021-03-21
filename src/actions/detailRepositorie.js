import { DETAIL_REPOSITORIE } from '.';

import api from '../services/api';

export function detailRepositorie(value) {
    return (dispatch) => {
        return api.get(`repos/${value}`).then((response) => {

            let repositorie = {
                full_name: '',
                description: '',
                stargazers_count: '',
                forks_count: 0,
                owner: {
                    login: '',
                    avatar_url: ''
                }
            };

            let issues = {
                id: '',
                title: '',
                html_url: '',
                user: {
                    login: '',
                }
            };

            repositorie.full_name = response.data.full_name;
            repositorie.description = response.data.description;
            repositorie.stargazers_count = response.data.stargazers_count;
            repositorie.forks_count = response.data.forks_count;
            repositorie.owner.login = response.data.owner.login;
            repositorie.owner.avatar_url = response.data.owner.avatar_url;

            issues.id = response.data.issues.id;
            issues.title = response.data.issues.title;
            issues.html_url = response.data.issues.html_url;
            issues.user.login = response.data.issues.user.login;

            dispatch({
                type: DETAIL_REPOSITORIE, repositorie, issues
            });
        });
    }
};