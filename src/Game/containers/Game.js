import { connect } from 'react-redux'
import { selectSquare, rewindHistory } from '../../actions'
import Board from '../components/Board.js';


const getSquares = (state) => {
	return state.app.squares
}

const getMessage = (state) => {
	return state.app.message
}

const getHistory = (state) => {
	return state.app.history
}

const getCompleted = (state) => {
	return state.app.completed
}

const getTurn = (state) => {
	return state.app.turn
}


const mapStateToProps = state => {
	return {
		squares: getSquares(state),
		message: getMessage(state),
		history: getHistory(state),
		completed: getCompleted(state),
		turn: getTurn(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: (idx) => {
			console.log(`Square selected: ${idx}`);
			dispatch(selectSquare(idx));
		},
		onRewind: () => {
			console.log(`I am going to rewind`);
			dispatch(rewindHistory());
		}
	}
}

const Game = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Board)

export default Game