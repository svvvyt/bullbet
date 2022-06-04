import React from 'react';

import './Select.scss';

export default function Select() {
  return (
    <select className="select">
      <option value="" selected disabled>
        Choose option
      </option>
      <option className="select__option">Option 1</option>
      <option className="select__option">Option 2</option>
      <option className="select__option">Option 3</option>
      <option className="select__option">Option 4</option>
    </select>
  );
}
