import React from 'react';
import './film-row.scss';

export default ({film, select, index, active}) => {

	const actors = film.actors.map((actor, index) => {
		return (<div key={`actor-${index}`}>{actor.name} {actor.famile}</div>);
	});

	return (
		<tr
			onClick={() => select({active: index, selected: film})}
			className={(active === index ? 'active' : '')}
		>
			<td>{film.name}</td>
			<td>{film.format_type}</td>
			<td className="actor">{actors}</td>
		</tr>
	);
};