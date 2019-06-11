import React from 'react';

export default ({ films, active }) => {
  if (!films || !films[active]) { return <h3>Nothing found :(</h3>; }

  const film = films[active];

  return (
    <div className="active_user">

        <h3>{film.name}</h3>

        <table className="film_info table ">
          <tbody>
            <tr>
              <td>Film age:</td>
              <td>{film.age}</td>
            </tr>
            <tr>
              <td>Films format:</td>
              <td>{film.format_type}</td>
            </tr>
            <tr>
              <td>Actors in film:</td>
              <td>{...film.actors}</td>
            </tr>
          </tbody>
        </table>

    
    </div>
  );
};