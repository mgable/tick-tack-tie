import React from 'react';
import Board from './Board.js';


class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {squares: new Array(9).fill(null), turn: 0, winner: false, completed: false, message: "Click any square to start"}
	}

	selectSquare (idx){
		if (! this.state.winner && !this.state.completed && !this.state.squares[idx]){ // and square has not aready been selected
			let squares = this.state.squares.slice(0),
				turn = this.state.turn + 1,
				winner,
				completed,
				message;
			
			squares[idx] = this.state.turn % 2 === 0 ? "X" : "O";
			winner = this.calculateWinner(squares);
			completed = winner || (turn === squares.length);

			if (winner){
				message = `${squares[idx]} is the winner`;
			} else if (completed){
				message = "Tie";
			} else {
				message = "The game continues";
			}

			this.setState({squares, turn, winner, completed, message});
		} else {
			console.info("game over, man");
		}
	}

	calculateWinner(squares){
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
			if (squares[group[0]] && squares[group[1]] && squares[group[2]] && squares[group[0]] === squares[group[1]] &&  squares[group[1]] === squares[group[2]]){
				return true
			}
		}

		return false;
	}

	render(){
		return (<Board message={this.state.message} squares={this.state.squares} onClick={(idx) => {this.selectSquare(idx)}}/>)
	}
}

export default Game