import React from 'react';

export function Square(props) {
  return (
    <button
      className={`square${props.value != null ? ' hasValue' : ''}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}