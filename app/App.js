import React, {Component} from 'react';
import request from './utils/loader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FilmList from './modules/film/components/film-list/FilmList';
import ActiveFilm from './modules/film/components/film-active/ActiveFilm';
import FilmForm from './modules/film/components/film-form/FilmForm';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            active: 0,
            selected: ''
        };

        this.loadFilms();
    }

    componentDidMount() {
    	
    }

    loadFilms() {
        request.get('/api/films')
            .then((response) => {
                console.log(response);
                this.setState({ films: response });
                this.setState({ selected: response[this.state.active] });
            })
            .catch(console.log);
    }

    addNewFilm(formData) {

        let film = {};
        formData.forEach(function(value, key){
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

        request.post('/api/films', '', JSON.stringify(film))
            .then((response) => {
                console.log(response);
                this.setState({ active: 0 });
                this.loadFilms();
            })
            .catch(console.log);
    }

    removeFilm(film, index) {
        request.delete(`/api/film/${film._id}`)
            .then((response) => {
                console.log(response);
                this.setState({ active: 0 });
                this.loadFilms();
            })
            .catch(console.log);
    }

    selectFilm(config) {
        this.setState(config);
    }

    render () {
	    return (
            <Container>
                <Row>
                    <FilmForm create={this.addNewFilm.bind(this)}/>
                </Row>
                <Row>
                    <div className="col-sm-4">
                        <ActiveFilm film={this.state.selected} remove={this.removeFilm.bind(this)} />
                    </div>
                    <div className="col-sm-8">
                        <FilmList data={this.state.films} select={this.selectFilm.bind(this)} active={this.state.active}/>
                    </div>
                </Row>
            </Container>
	    );
    }
}
