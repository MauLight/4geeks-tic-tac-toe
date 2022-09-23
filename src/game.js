import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }



  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Back to move n°' + move :
        'Back to game start';
      return (
        <li key={move}>
          <button className="btn btn-dark btn-sm" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner === 'X') {
      status = 'Player 1 Wins';
    }
    else if (winner === 'O') {
      status = 'Player 2 Wins'
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'Player 1' : 'Player 2');
    };

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
          <div className='wrapper d-flex justify-content-center rounded-0'>

            <button className="btn btn-secondary btn-sm  w-100 d-flex justify-content-center p-1 m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {status}
            </button>
          </div>
          <div className="btn-group d-flex justify-content-center ">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Actions
            </button>
            <ul className="dropdown-menu bg-dark w-100">
              {moves}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;