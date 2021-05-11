import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';

function Summary({ isModal }) {
  const appState = useContext(StateContext);

  function sumReducer(question) {
    const line = {
      borderBottom: '1px solid #0e8784',
      paddingLeft: '60px',
    };

    switch (question) {
      case 1:
        if (appState.sum[0] !== '') {
          return (
            <span className="summary-selection">
              {appState.sum[0] === 'Capsule' ? 'Capsules' : appState.sum[0]}
            </span>
          );
        }
        return <span style={line}> </span>;
      case 2:
        if (appState.sum[1] !== '') {
          return <span className="summary-selection">{appState.sum[1]}</span>;
        }
        return <span style={line}> </span>;
      case 3:
        if (appState.sum[2] !== '') {
          return <span className="summary-selection">{appState.sum[2]}</span>;
        }
        return <span style={line}> </span>;
      case 4:
        return <span className="summary-selection">{appState.sum[3]}</span>;

      case 5:
        if (appState.sum[4] !== '') {
          return <span className="summary-selection">{appState.sum[4]}</span>;
        }
        return <span style={line}> </span>;
      default:
        break;
    }
  }
  return (
    <p
      className={`heading-quaternary ${isModal ? 'submit-modal__summary' : ''}`}
    >
      "I drink my coffee {appState.sum[0] === 'Capsule' ? 'using ' : 'as '}
      {sumReducer(1)}, with a {sumReducer(2)} type of bean. {sumReducer(3)}
      {' , '}
      {appState.sum[3] !== '' ? 'ground ala ' : null}
      {sumReducer(4)} sent to me {sumReducer(5)}."
    </p>
  );
}

export default Summary;
