/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <div className="sidebar__elem">
            <div className="sidebar__elem__game-logo">
              <img
                src="https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png"
                alt=""
                className="game-logo"
              />
            </div>
            <p>CS:GO</p>
          </div>
          <div className="sidebar__elem">
            <div className="sidebar__elem__game-logo">
              <img
                src="https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png"
                alt=""
                className="game-logo"
              />
            </div>
            <p>Dota 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
