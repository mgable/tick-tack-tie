import React from 'react';
import Square from "./Square.js";
import './Board.css';


const Board = ({message, onClick, squares}) => {
	console.info(message, onClick, squares);
	const renderSquare = (idx) => {
		return ( <Square onClick={() => onClick(idx)} value={squares[idx]}/> )
	}

	return (
		<div className= "board-holder">
			<div className="message">{message}</div>
			<div className="board">
				<div className="board-row">
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className="board-row">
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className="board-row">
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		</div>
	)
}

export default Board