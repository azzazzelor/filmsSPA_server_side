import React from 'react';
import FilmRow from '../film-row/FilmRow';
import './film-list.scss';

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
        <table className="film-list table table-striped">
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
        </table>
    );
}