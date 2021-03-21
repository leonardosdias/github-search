import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { detailRepositorie } from '../../actions/detailRepositorie';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';


const Detail = () => {
    const { params } = useRouteMatch();
    const [repository, setRepository] = useState();
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        api.get(`/repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        api.get(`/repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

    }, [params]);

    return (
        <>
            <Header>
                <Link to="/">
                    <Button type="primary" size="large">
                        <ArrowLeftOutlined />
                        Voltar
                    </Button>
                </Link>
            </Header>
            {repository ? (
                <>
                    <RepositoryInfo>
                        <header>
                            <img src={repository?.owner?.avatar_url} alt={repository?.owner?.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>{repository.stargazers_count}</strong>
                                <span>Stars/Estrelas</span>
                            </li>
                            <li>
                                <strong>{repository.forks_count}</strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>{repository.open_issues_count}</strong>
                                <span>Issues Abertas</span>
                            </li>
                        </ul>
                    </RepositoryInfo>

                </>
            ) : null}
            <Issues>
                {issues?.map((issue) => (
                    <a key={issue.id} href={issue.html_url} target="_blank">
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <ArrowRightOutlined />
                    </a>
                ))}
            </Issues>
        </>
    )
}

const mapStateToProps = store => ({
    repositorie: store.state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ detailRepositorie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
