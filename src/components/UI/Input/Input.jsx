import React from 'react';
import classNames from 'classnames';

import './Input.scss';

export default function Input({
  labelText,
  placeholderText,
  value,
  id,
  htmlFor,
  disabled,
  promocode,
  main,
  bet,
  betEmail,
  inputType,
}) {
  // TODO: classNames VS hardcoded scss-classes
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{labelText}</label>
      <div className="input-container">
        <input
          className={classNames({
            'input-promocode': promocode,
            'input-main': main,
            'input-bet': bet,
            'input-bet-email': betEmail,
          })}
          type={inputType}
          placeholder={placeholderText}
          id={id}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
