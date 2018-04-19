import React from 'react';
import Square from "./Square.js";
import './Board.css';


class Board extends React.Component {
	renderSquare (idx){
		return ( <Square onClick={() => this.props.onClick(idx)} value={this.props.squares[idx]}/> )
	}

	render() {
		return (
			<div className= "board-holder">
				<div className="message">{this.props.message}</div>
				<div className="board">
					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
					<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>
					<div className="board-row">
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</div>
				</div>
			</div>
		)
	}
}

export default Board