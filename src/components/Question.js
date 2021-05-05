import React, { useState, useContext } from 'react';
import { StateContext } from '../pages/Plan';
import { DispatchContext } from '../pages/Plan';

function Question(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [showInfo, setShowInfo] = useState(false);
  const [btnToggle, setButtonToggle] = useState(false);

  function questionDisable() {
    if (props.question === 'question4' && appState.sum[0] === 'Capsule') {
      return true;
    } else return false;
  }

  function handleChange(e) {
    setButtonToggle(!btnToggle);
    if (questionDisable === true) {
      return null;
    } else {
      setShowInfo(!showInfo);
      appDispatch({ type: 'showOptions', value: e.target.value });
    }
  }

  return (
    <div className="form-question">
      <div className="title-container">
        <h1 className="heading-secondary">{props.title}</h1>
        <button
          value={props.question}
          className={`btn-accordion ${btnToggle && 'isRotated'}`}
          onClick={handleChange}
        >
          <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
              fill="#0E8784"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
      {showInfo ? (
        <div className="input-container">
          {props.options.map((option) => (
            <div key={option.radioName} className="form-check">
              <label>
                <input
                  type="radio"
                  name={props.question}
                  value={option.radioName}
                  onChange={props.handleChange}
                  checked={!!option.selected}
                  className="base-input"
                />
                <span className="form-check-input"></span>
                <h3 className="heading-quaternary">{option.title}</h3>
                <p className="text-dark">{option.info}</p>
              </label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Question;
