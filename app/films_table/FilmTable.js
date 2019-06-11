import React from 'react';

export default ({ film, update, index }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td>{film.name}</td>
      <td>{film.year}</td>
      <td>{film.format_type}</td>
      <td>{film.actors}</td>
      <button onClick={this.props.deleteFilm}></button>
    </tr>
  );
};