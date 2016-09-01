import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/PokemonActions';

class PokemonPage extends Component {
	componentWillMount() {
		this.props.fetchPokemon();
	}
	render() {
		console.log ('this.props.pokemon:', this.props.pokemon)
		return (
			<h1 className="text-center">
				PokemonPage
			</h1>
		)
	}
}

export default connect(
	state => {
		return {
			pokemon: state.pokemon
		}
	},
	dispatch => {
		return {
			fetchPokemon() {
				dispatch(fetchPokemon())
			}
		}
	}
)(PokemonPage);
