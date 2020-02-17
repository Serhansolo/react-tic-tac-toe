import React from 'react';

// import Components
import { Square } from './Square';
import calculateWinner from '../helpers/calculateWinner';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    // Make the squares state immutable
    const squares = this.state.squares.slice();

    // Check if there is a winner OR if the clicked square is already occupied.
    if (this.gameHasWinner() || squares[i]) {
      return;
    }

    // if not then add current players signature.
    squares[i] = this.state.xIsNext ? 'X' : "O";

    // create new state object from changed data.
    const state = {
      squares: squares,
      xIsNext: !this.state.xIsNext
    }

    // update the state.
    this.setState(state);
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  renderPlayerStatus() {
    // initial game status based on next player status.
    let status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;;

    // if game has a winner then change status accordingly.
    if (this.gameHasWinner()) {
      status = `Winner is: ${this.gameHasWinner()}!`;
    }

    return status;
  }

  gameHasWinner() {
    return calculateWinner(this.state.squares);
  }

  render() {
    return (
      <div className={`${!this.gameHasWinner() ? 'playing' : ''}`}>
        <div className="status">{this.renderPlayerStatus()}</div>
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
    );
  }
}
