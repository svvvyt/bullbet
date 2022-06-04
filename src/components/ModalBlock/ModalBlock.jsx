import React from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import './ModalBlock.scss';

export default function ModalBlock() {
  return (
    <div className="modalblock">
      <div className="modalblock__container">
        <div className="modalblock__header">
          <div className="modalblock__close-btn"></div>
          <div className="modalblock__team-logo">
            <img
              width="45px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gambit_Esports_2020_logo.svg/1804px-Gambit_Esports_2020_logo.svg.png"
              alt="team-logo"
            />
          </div>
          <div className="modalblock__teams">team__name vs team__name</div>
          <div className="modalblock__team-logo">
            <img
              width="45px"
              src="https://cdn.escharts.com/uploads/public/617/d28/7b1/617d287b11b59993940074.png"
              alt="team-logo"
            />
          </div>
        </div>
        <div className="modalblock__main">
          <div className="modalblock__event modalblock__section">
            <div className="modalblock__event__title">win</div>
            <div className="modalblock__event__content">
              <div className="modalblock__bet">
                <div className="modalblock__bet__button-wrapper">
                  <Button className="button" bet disabled>
                    1373₽
                  </Button>
                </div>
                <div className="modalblock__bet__team-name">ASM.Gambit</div>
              </div>
              <div className="modalblock__bet">
                <div className="modalblock__bet__button-wrapper">
                  <Button className="button" bet disabled>
                    180₽
                  </Button>
                </div>
                <div className="modalblock__bet__team-name">
                  Yet Another Team
                </div>
              </div>
            </div>
          </div>
          <div className="modalblock__bet-amount modalblock__section">
            <div className="modalblock__bet-amount__input">
              <Input
                inputType="phone"
                bet
                placeholderText="0₽"
                labelText="Bet amount:"
              />
            </div>
          </div>
          <div className="modalblock__action modalblock__section">
            <div className="modalblock__action__forecast">
              <div className="modalblock__action__title">
                Potential winnings:
              </div>
              <div className="modalblock__action__profit">4.86₽</div>
            </div>
            <div className="modalblock__action__button-wrapper">
              <Button main>PLACE BET</Button>
            </div>
          </div>
          <div className="modalblock__email modalblock__section">
            <div className="modalblock__email">
              <div className="modalblock__email__warning">
                Enter your email address to place a bet:
              </div>
              <div className="modalblock__email__input">
                <Input betEmail placeholderText="example@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
