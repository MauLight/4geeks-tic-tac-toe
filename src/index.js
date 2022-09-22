import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Square = (props) => {

      return (
        <button className= "square" onClick= {props.onCLick}>
          {props.value}
        </button>
      );
    }

const Board = (props) => {

    const [board, boardState] = useState( {squares: Array(9).fill('')});

    const handleClick = (i) => {
        const squares = board.squares.slice();
        squares[i] = 'x';
        boardState({squares: squares})
    }

    const renderSquare = (i) => {
      
      return <Square value= {board.squares[i]} onCLick= {() => handleClick(i)} />;
    }
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
      );
    }
  
const Game = (props) => {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    };
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  