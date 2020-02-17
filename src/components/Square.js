import React from 'react';
import classnames from 'classnames';

export function Square(props) {
  let btnClassses = classnames({
    'square': true,
    'hasValue': props.value != null,
    'hasX': props.value === 'X',
    'hasO': props.value === 'O',
  });

  return (
    < button
      className={btnClassses}
      onClick={props.onClick}
    >
      {props.value}
    </button >
  );
}