import React, {Component} from 'react';
import request from './utils/loader';
import FilmList from './modules/film/components/FilmList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            active: ''
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
            })
            .catch(console.log);
    }

    addNewFilm(data) {
        request.post('/api/films')
            .then((response) => {
                console.log(response);
                this.state.films.push(response);
            })
            .catch(console.log);
    }

    removeFilm(filmId) {
        request.delete(`/api/film/${filmId}`)
            .then((response) => {
                console.log(response);
                this.state.films.pus(response);
            })
            .catch(console.log);
    }

    render () {
	    return (
	    	<FilmList data={this.state.films}/>
	    );
    }
}
