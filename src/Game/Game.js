import React from 'react';
import Board from './Board.js';


class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {squares: new Array(9).fill(null), turn: 0, winner: false, completed: false}
	}

	selectSquare (idx){
		if (! this.state.winner && !this.state.completed){
			let squares = this.state.squares.slice(0),
				turn = this.state.turn + 1;
			
			squares[idx] = this.state.turn % 2 === 0 ? "X" : "O";
			let winner = this.calculateWinner(squares),
				completed = winner || (turn === squares.length);

			console.info(winner, (turn === squares.length), completed);

			this.setState({squares, turn, winner, completed});

			if (winner){
				console.info("we have a winner");
			} else if (completed){
				console.info("tie");
			} else {
				console.info("the game continues");
			}
		} else {
			console.info("game over, man");
		}
	}

	calculateWinner(squares){
		// console.info("the squares");
		// console.info(squares);
		let lines = [ 
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		]

		for (let x = 0; x < lines.length; x++){
			let group = lines[x];
			// console.info("the group");
			// console.info(group);
			// console.info(squares[group[0]], squares[group[1]], squares[group[2]]);
			if (squares[group[0]] && squares[group[1]] && squares[group[2]] && squares[group[0]] === squares[group[1]] &&  squares[group[1]] === squares[group[2]]){
				console.info("there is a winner");
				return true
			}
		}
		console.info("no winner");
		return false
	}

	render(){
		return (<Board squares={this.state.squares} onClick={(idx) => {this.selectSquare(idx)}}/>)
	}
}

export default Game