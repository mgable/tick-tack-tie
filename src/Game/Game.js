import React from 'react';
import Board from './Board.js';


class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {squares: new Array(9).fill(null)}
	}

	selectSquare (idx){
		console.info("You clicked on ", idx);

	}

	render(){
		return (<Board squares={this.state.squares} onClick={(idx) => {this.selectSquare(idx)}}/>)
	}
}

export default Game