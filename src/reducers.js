import { combineReducers } from 'redux';
import { SELECT_SQUARE, REWIND_HISTORY } from './actions';

const lines = [ 
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];
 
export const initialState = {history: [], squares: new Array(9).fill(null), turn: 0, winner: false, completed: false, message: "Click any square to start"}
 
const app = (state = initialState, action) => {
	switch(action.type){
		case SELECT_SQUARE: return selectSquare(state, action)
		case REWIND_HISTORY: return rewind(state, action)
		default: return state
	}  
}

const rewind = (state, action) => {
	if (state.turn > 0 && !state.completed){
		let history = state.history.slice(0),
			turn = state.turn - 1,
			squares = history.pop()
		
		return Object.assign({}, state, {history, squares, turn});
	} else {
		return state;
	}
}

const selectSquare = (state, action) => {
	if (! state.winner && !state.completed && !state.squares[action.idx]){
		let squares = state.squares.slice(0),
			turn = state.turn + 1,
			winner,
			completed,
			message,
			history = state.history.slice(0);
		
		history.push(state.squares.slice(0));
		squares[action.idx] = state.turn % 2 === 0 ? "X" : "O";
		winner = calculateWinner(squares);
		completed = winner || (turn === squares.length);

		if (winner){
			message = `${squares[action.idx]} is the winner`;
		} else if (completed){
			message = "Tie";
		} else {
			message = "The game continues";
		}

		return Object.assign({}, state, {squares, turn, winner, completed, message, history});
	} else {
		return state;
	}
}

const calculateWinner = (squares) => {

	for (let x = 0; x < lines.length; x++){
		let group = lines[x];
		if (squares[group[0]] && squares[group[1]] && squares[group[2]] && squares[group[0]] === squares[group[1]] &&  squares[group[1]] === squares[group[2]]){
			return true
		}
	}

	return false;
}

 
const reducers = combineReducers({
	app
})
 
export default reducers