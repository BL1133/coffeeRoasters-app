import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';
import { DispatchContext } from '../pages/Plan';

function Question(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const toggleOptions = appState.toggleOptions[props.question];

  function handleChange(e) {
    const questionName = e.currentTarget.value;
    const questionIndex = appState.data.findIndex(
      (question) => question.name === questionName
    );
    appDispatch({ type: 'toggleOptions', value: questionName });
    appDispatch({ type: 'accordionOpened', value: questionIndex });
  }

  return (
    <div className="form-question">
      <div className="title-container">
        <h1
          className={`heading-secondary ${
            appState.sum[0] === 'Capsule' && props.question === 'question4'
              ? 'question-disabled'
              : ''
          }`}
        >
          {props.title}
        </h1>
        <button
          value={props.question}
          className={`btn-accordion ${toggleOptions && 'isRotated'} ${
            appState.sum[0] === 'Capsule' && props.question === 'question4'
              ? 'btn-disabled'
              : ''
          }`}
          onClick={handleChange}
          type="button"
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
      {toggleOptions === true ? (
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
