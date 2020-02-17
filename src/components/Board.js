import React from 'react';

// import Components
import { Square } from './Square';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares;
    squares[i] = this.state.xIsNext ? 'X' : "O";
    const state = {
      squares: squares,
      xIsNext: !this.state.xIsNext
    }
    this.setState(state);
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  renderPlayerStatus() {
    return `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
  }

  render() {
    return (
      <div>
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
