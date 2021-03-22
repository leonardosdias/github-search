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
    
    const { searchRepositorie, repositories } = props;

    const handleSubmit = useCallback((data) => {
        searchRepositorie(data.username);

        setState(data.username);
    }, [searchRepositorie]);


    return (
        <>
            <Title>Repositórios</Title>

            <Form name="search-repositories"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
            >
                <Row>
                    <label className="label">Digite o usuário do GitHub</label>
                </Row>

                <Row justify="space-between">
                    <Col span={20}>
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: true, message: 'Nome de usuário é obrigatório.' }]}
                        >
                            <Input
                                size="large"
                                value={state}
                                allowClear={true}
                            />
                        </Form.Item>
                    </Col>

                    <Col>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
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
                        <Repositories key={repositorie.full_name}>
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
