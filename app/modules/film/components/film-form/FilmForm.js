import React, {Component} from 'react';
import './film-form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class FilmForm extends Component {

    constructor(...props) {
        super(...props);

        this.state = {
            id: '',
            name: '',
            genre: '',
            actors: ''
        };

        this.saveFilm = this.saveFilm.bind(this);
    }

    componentDidMount() {
        if(this.props.type === 'edit') {
            const { film } = this.props;

            let actors = [];
            film.actors.forEach((actor) => {
                actors.push(`${actor.name} ${actor.famile}`);
            });

            this.setState({
                id: film._id,
                name: film.name,
                genre: film.format_type,
                actors: actors.join(', ')
            });
        }
    }

    saveFilm(event) {
        event.preventDefault();

        const { create, update } = this.props;
        const data = new FormData(event.target);


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

        if(this.props.type === 'edit') {
            film._id = this.state.id;

            update(film);
        } else {
            create(film);
        }

    }

    render() {
        return (
            <Form onSubmit={this.saveFilm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFilmName">
                        <Form.Label>Film name</Form.Label>
                        <Form.Control
                            defaultValue={this.state.name}
                            name="name"
                            type="text"
                            placeholder="Enter film name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formFilmGenre">
                        <Form.Label>Film genre</Form.Label>
                        <Form.Control
                            defaultValue={this.state.genre}
                            name="format_type"
                            type="text"
                            placeholder="Enter film genre"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFilmActors">
                        <Form.Label>Film's actors</Form.Label>
                        <Form.Control
                            defaultValue={this.state.actors}
                            name="actors"
                            type="text"
                            placeholder="Enter film actors"/>
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