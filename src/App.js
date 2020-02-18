import React from 'react';

// import Components
import { Board } from './components/Board';
import calculateWinner from './helpers/calculateWinner';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }
  handleClick(i) {
    // Make the squares state immutable
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Check if there is a winner OR if the clicked square is already occupied.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // if not then add current players signature.
    squares[i] = this.state.xIsNext ? 'X' : "O";

    // create new state object from changed data.
    const state = {
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    }

    // update the state.
    this.setState(state);
  }

  renderPlayerStatus() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    // initial game status based on next player status.
    let status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;

    // if game has a winner then change status accordingly.
    if (winner) {
      status = `Winner is: ${winner}!`;
    }

    return status;
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <div className={`game-board ${!winner ? 'playing' : ''}`}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">
            {this.renderPlayerStatus()}
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}