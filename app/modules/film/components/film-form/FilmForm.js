import React, {Component} from 'react';
import './film-form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class FilmForm extends Component {

    constructor(...props) {
        super(...props);

        this.film = {
            name: '',
            format_type: '',
            actors: []
        };
        this.saveFilm = this.saveFilm.bind(this);
    }

    saveFilm(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const { create } = this.props;

        let film = {};
        data.forEach(function(value, key){
            film[key] = value;
        });

        const actors = film.actors.split(',');

        film.actors = [];

        actors.forEach((actorText) => {
            const actor = {};
            const temp = actorText.replace(/(^\s*)|(\s*)$/g, '').split(" ");
            actor.name = temp[0];
            actor.famile = temp[1];

            film.actors.push(actor);
        });

        create(film);
    }

    render() {
        return (
            <Form onSubmit={this.saveFilm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFilmName">
                        <Form.Label>Film name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter film name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formFilmGenre">
                        <Form.Label>Film genre</Form.Label>
                        <Form.Control name="format_type" type="text" placeholder="Enter film genre"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formFilmActors">
                        <Form.Label>Film's actors</Form.Label>
                        <Form.Control name="actors" as="textarea" rows="2" placeholder="Enter film actors"/>
                        <Form.Text className="text-muted">
                            Separate actors by ","
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" >Submit form</Button>
            </Form>
        );
    }
}