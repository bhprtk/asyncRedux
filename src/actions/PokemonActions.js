import axios from 'axios';

// synchronous action creator
export function receivePokemon(pokemon) {
	return {
		type: 'RECEIVE_POKEMON',
		payload: { pokemon }
	}
}

// asynchronous action
export function fetchPokemon() {
	return dispatch => {
		axios.get('./api/pokemon')
			.then(res => res.data)
			.then(pokemon => {
				dispatch(receivePokemon(pokemon));
			})
			.catch(console.error)
	}
}
