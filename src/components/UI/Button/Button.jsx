/* eslint-disable */

import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export default function Button({ children, main, secondary, bet, disabled }) {

  const buttonClasses = {}

  return (
    <button
      disabled={disabled}
      className={classNames('button', {
        'button__main': main,
        'button__secondary': secondary,
        'button__bet': bet,
      })}
    >
      {children}
    </button>
  );
}
