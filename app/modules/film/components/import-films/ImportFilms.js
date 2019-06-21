import React, {Component} from 'react';

import './import-films.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

export default ({upload}) => {

    let fileReader;

    const handleFileReader = (e) => {
        const content = fileReader.result;

        //do generation new film
        const films = JSON.parse(content);
        if (films.length > 0){
            films.forEach(function(film){
                upload(film);
            });
        }
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileReader;
        fileReader.readAsText(file);
    };

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="importFile">
                    <Form.Label>Import Films:</Form.Label>
                    <Form.Control
                        onChange={e => handleFileChosen(e.target.files[0])}
                        name="file"
                        type="file"
                        acept='.txt'
                        placeholder="select file"/>
                </Form.Group>
            </Form.Row>
        </Form>
    );

}