import React from 'react';
import FilmRow from './FilmRow';

export default ({data, select}) => {
    if (!data) {
        return (<p>Loading...</p>);
    }

    const films = data.map((film, index) => {
        return (<FilmRow film={film} index={index} select={select} key={`film-${index}`}/>);
    });

    return (
        <table className="film-list table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {films}
            </tbody>
        </table>
    );
}