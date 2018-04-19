import React from 'react';
import Board from './Board.js';


class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {squares: new Array(9).fill(null), turn: 0}
	}

	selectSquare (idx){
		let squares = this.state.squares.slice(0),
			turn = this.state.turn + 1
		squares[idx] = this.state.turn % 2 === 0 ? "X" : "O" ;

		this.setState({squares, turn});
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

		lines.forEach((line) => {
			
		});
	}

	render(){
		return (<Board squares={this.state.squares} onClick={(idx) => {this.selectSquare(idx)}}/>)
	}
}

export default Game