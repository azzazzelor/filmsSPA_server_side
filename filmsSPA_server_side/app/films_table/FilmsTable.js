
import React from 'react';

import FilmTable from './FilmTable.js';

export default ({ films, update }) => {
    if (!films) { return (<p>Loading...</p>); }
    const Films = films.map((film, index) => {
        return (<FilmTable film={film} index={index} update={update} />);
      });
      
  return (
    <table className="film_list table ">
      <thead>
        <tr>
          <th>Film name</th>
          <th>Film year</th>
          <th>Film format</th>
          <th>film actors</th>
        </tr>
      </thead>
      <tbody>
       {Films}
      </tbody>
    </table>
  );
};

