import React, {Component} from 'react';
import Request from './utils/RequestService';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import FilmList from "./modules/film/components/film-list/FilmList";
import ActiveFilm from "./modules/film/components/film-active/ActiveFilm";
import FilmForm from "./modules/film/components/film-form/FilmForm";
import AppHeader from "./modules/root/components/header/Header";
import ImportFilms from "./modules/film/components/import-films/ImportFilms";

export default class App extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            films: [],
            active: 0,
            selected: '',
            showForm: false
        };

        this.loadFilms();
    }

    componentDidMount() {
    	
    }

    loadFilms() {
        Request.get('/api/films')
            .then((response) => {
                console.log(response);
                this.setState({ films: response });
                this.setState({ selected: response[this.state.active] });
            })
            .catch(console.log);
    }

    addNewFilm(film) {
        Request.post('/api/films', '', JSON.stringify(film))
            .then((response) => {
                console.log(response);
                this.setState({ active: 0 });
                this.loadFilms();
            })
            .catch(console.log);
    }

    removeFilm(film, index) {
        Request.delete(`/api/film/${film._id}`)
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

    handleCloseForm() {
        this.setState({ showForm: false });
    }

    handleShowForm() {
        this.setState({ showForm: true });
    }

    render () {
	    return (
	        <>
            <Container fluid="true">
                <AppHeader />

                <Row>
                    <Col sm={4}>
                        <ActiveFilm
                            film={this.state.selected}
                            remove={this.removeFilm.bind(this)}
                        />
                        <ImportFilms upload={this.addNewFilm.bind(this)}/>
                    </Col>

                    <Col sm={8}>
                        <Button variant="primary" onClick={this.handleShowForm.bind(this)}>
                            + Add new
                        </Button>
                        <FilmList
                            data={this.state.films}
                            select={this.selectFilm.bind(this)}
                            active={this.state.active}
                        />
                    </Col>
                </Row>

                <Modal show={this.state.showForm} onHide={this.handleCloseForm.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Film Form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FilmForm create={this.addNewFilm.bind(this)}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseForm.bind(this)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            </>
	    );
    }
}
