import React from 'react';

export default ({film, select, index}) => {
	debugger;
	return (

		<tr onClick={() => select({active: index})}>
			<td>{film.name}</td>
			<td>{film.format_type}</td>
		</tr>
	);
};