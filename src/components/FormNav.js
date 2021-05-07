import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';

function FormNav() {
  const appState = useContext(StateContext);

  return (
    <div className={`form-nav-container`}>
      <div className="form-nav__item">
        <p className="form-nav__number heading-quaternary">01</p>
        <p className="form-nav__title heading-quaternary">Preferences</p>
      </div>
      <div className="form-nav__item">
        <p className="form-nav__number heading-quaternary">02</p>
        <p className="form-nav__title heading-quaternary">Bean Type</p>
      </div>
      <div className="form-nav__item">
        <p className="form-nav__number heading-quaternary">03</p>
        <p className="form-nav__title heading-quaternary">Quantity</p>
      </div>
      <div
        className={`form-nav__item ${
          appState.sum[0] === 'Capsule' ? 'form-question-disabled' : ''
        }`}
      >
        <p className="form-nav__number heading-quaternary">04</p>
        <p className="form-nav__title heading-quaternary">Grind Option</p>
      </div>
      <div className="form-nav__item">
        <p className="form-nav__number heading-quaternary">05</p>
        <p className="form-nav__title heading-quaternary">Deliveries</p>
      </div>
    </div>
  );
}

export default FormNav;
