import React, {Component} from 'react';
import './header.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


export default ({search}) => {

    const filmSearch = (input) => {
        const value = input.target.value.toLowerCase();

        search(value);
    };

    return (
        <Row>
            <Col sm={12} className="app-header dark">
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/static/images/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Film list'}
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search film"
                            className="mr-sm-2"
                            onChange={filmSearch}
                        />
                    </Form>
                </Navbar>

            </Col>
        </Row>
    );

}