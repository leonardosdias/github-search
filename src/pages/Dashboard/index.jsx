import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { searchRepositorie } from '../../actions/searchRepositories';
import { Form, Input, Button, Row, Col } from 'antd';
import { Repositories, Title } from './styles.js';


const Dashboard = (props) => {
    const [state, setState] = useState('');

    const onChange = useCallback((event) => {
        setState(event.target.value);
    }, []);

    const { searchRepositorie, repositorie } = props;

    console.log(props);

    return (
        <>
            <Title>Repositórios</Title>

            <Form
                name="basic"
            // initialValues={{ remember: true }}
            // onFinish={onChange}
            // onFinishFailed={onFinishFailed}
            >
                <Row>
                    <label className="label">Digite o nome do repositório e autor</label>
                </Row>

                <Row justify="space-between">
                    <Col span={18}>
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: true, message: 'Digite o nome do autor/repositório.' }]}

                        >
                            <Input size="large" onChange={onChange} value={state} />
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="button" size="large" onClick={() => searchRepositorie(state)}>
                                Pesquisar
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            <Row justify="space-between">
                <Col span={24}>
                    {repositorie ?
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
                            </Link>
                        </Repositories>
                        : null
                    }
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = store => ({
    repositorie: store.initialRepositorieState.repositorie
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ searchRepositorie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
