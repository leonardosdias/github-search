import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';

import { searchRepositorie } from '../../actions/searchRepositories';
import { Form, Input, Button, Row, Col } from 'antd';
import { Repositories, Title } from './styles.js';

const Dashboard = (props) => {
    const [state, setState] = useState([]);

    const onChange = useCallback((event) => {
        setState(event.target.value);
    }, []);

    const { searchRepositorie, repositories } = props;

    return (
        <>
            <Title>Repositórios</Title>

            <Form name="search-repositories" >
                <Row>
                    <label className="label">Digite o nome do autor</label>
                </Row>

                <Row justify="space-between">
                    <Col span={20}>
                        <Form.Item
                            label=""
                            name="username"
                        >
                            <Input size="large" onChange={onChange} value={state} />
                        </Form.Item>
                    </Col>

                    <Col>
                        <Form.Item>
                            <Button type="primary" htmlType="button" size="large" onClick={() => searchRepositorie(state)}>
                                <SearchOutlined />
                                Pesquisar
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            <Row justify="space-between">
                <Col span={24}>
                    {repositories.length ? repositories.map(repositorie => (
                        <Repositories>
                            <Link key={repositorie.full_name} to={`/repository/${repositorie.full_name}`}>
                                <img
                                    src={repositorie.owner.avatar_url}
                                    alt={repositorie.owner.login}
                                />
                                <div>
                                    <strong>{repositorie.full_name}</strong>
                                    <p>{repositorie.description}</p>
                                </div>
                                <ArrowRightOutlined />
                            </Link>
                        </Repositories>
                    )) : null}
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = store => ({
    repositories: store.initialRepositoriesState.repositories
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ searchRepositorie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
