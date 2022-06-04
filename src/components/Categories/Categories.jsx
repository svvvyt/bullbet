import React from 'react';

import './Categories.scss';

export default function Categories({ items, onClickCategory, activeCategory }) {
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}
