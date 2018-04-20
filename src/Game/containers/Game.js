import { connect } from 'react-redux'
import { selectSquare } from '../../actions'
import Board from '../components/Board.js';


const getSquares = (state) => {
	console.info("I am getting squares");
	console.info(state);
	return state.app.squares
}

const getMessage = (state) => {
	return state.app.message
}

const mapStateToProps = state => {
	return {
		squares: getSquares(state),
		message: getMessage(state),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: (idx) => {
			console.log(`Square selected: ${idx}`);
			dispatch(selectSquare(idx));
		}
	}
}

const Game = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Board)

export default Game