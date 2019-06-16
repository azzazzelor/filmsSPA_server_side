import React from 'react';
import FilmRow from '../film-row/FilmRow';
import './film-list.scss';
import Table from 'react-bootstrap/Table';

export default ({data, select, active}) => {
    if (!data) {
        return (<p>Loading...</p>);
    }

    const films = data.map((film, index) => {
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