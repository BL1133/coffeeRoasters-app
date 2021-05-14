import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';

function FormNav() {
  const appState = useContext(StateContext);

  return (
    <div className="form-nav-container">
      <div className="form-nav__sticky">
        <div
          className={`form-nav__item ${
            appState.toggleOptions.question1 === true &&
            appState.currentQuestion === 0
              ? 'form-nav__item--highlighted'
              : ''
          }`}
        >
          <p className="form-nav__number">01</p>
          <p className="form-nav__title">Preferences</p>
        </div>
        <div
          className={`form-nav__item ${
            appState.toggleOptions.question2 === true &&
            appState.currentQuestion === 1
              ? 'form-nav__item--highlighted'
              : ''
          }`}
        >
          <p className="form-nav__number">02</p>
          <p className="form-nav__title">Bean Type</p>
        </div>
        <div
          className={`form-nav__item ${
            appState.toggleOptions.question3 === true &&
            appState.currentQuestion === 2
              ? 'form-nav__item--highlighted'
              : ''
          }`}
        >
          <p className="form-nav__number">03</p>
          <p className="form-nav__title">Quantity</p>
        </div>
        <div
          className={`form-nav__item ${
            appState.sum[0] === 'Capsule' ? 'form-question-disabled' : ''
          } ${
            appState.toggleOptions.question4 === true &&
            appState.currentQuestion === 3
              ? 'form-nav__item--highlighted'
              : ''
          } `}
        >
          <p className="form-nav__number">04</p>
          <p className="form-nav__title">Grind Option</p>
        </div>
        <div
          className={`form-nav__item ${
            appState.currentQuestion === 4 ? 'form-nav__item--highlighted' : ''
          }`}
        >
          <p className="form-nav__number">05</p>
          <p className="form-nav__title">Deliveries</p>
        </div>
      </div>
    </div>
  );
}

export default FormNav;
