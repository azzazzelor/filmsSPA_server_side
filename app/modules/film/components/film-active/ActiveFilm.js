import React from 'react';
import './film-active.scss';
import Button from 'react-bootstrap/Button';

export default ({film, remove, edit, index}) => {

    if (!film) {
        return (<p>Loading...</p>);
    }

    const actors = film.actors.map((actor, index) => {
        return (
            <div key={`actor-${index}`}>
                {actor.name} {actor.famile}
            </div>
        );
    });

    return (
        <div className="card">
            <div>{film.name}</div>
            <div>{film.format_type}</div>
            <div>{actors}</div>
            <Button className="btn-info"
                    onClick={() => edit('edit')}>
                edit film
            </Button>

            <Button className="btn-danger"
                    onClick={() => remove(film)}>
              remove film
            </Button>
        </div>
    );
}