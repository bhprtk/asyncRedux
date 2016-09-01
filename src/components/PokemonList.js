import React, { Component } from 'react';

const PokemonList = ({pokemon}) => {

	let Pokemon = pokemon.map(p => {
		let { _id, name, number, types, image } = p;
		return (
			<div className="col-xs-12 col-md-4 col-sm-4" key={_id}>
				<div>
					<img src={image} />
				</div>
				<div>
					<h3>{name}</h3>
					<p>Id: {number}</p>
				</div>
			</div>
		)
	});

	return (
		<div>
			{Pokemon}

		</div>
	);


}

export default PokemonList;
