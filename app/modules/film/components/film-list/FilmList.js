import React from 'react';
import FilmRow from '../film-row/FilmRow';
import './film-list.scss';
import Table from 'react-bootstrap/Table';

export default ({data, select, active, terms}) => {
    if (!data) {
        return (<p>Loading...</p>);
    }

    const filmList = data.filter((film) => {debugger;
        return film.name.toLowerCase().includes(terms) ||
            JSON.stringify(film.actors).toLowerCase().includes(terms);
    });

    const films = filmList.map((film, index) => {
        return (
            <FilmRow
                film={film}
                index={index}
                select={select}
                key={`film-${index}`}
                active={active}
            />);
    });

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Actors</th>
                </tr>
            </thead>
            <tbody>
                {films}
            </tbody>
        </Table>
    );
}