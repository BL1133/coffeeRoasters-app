import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';

function Summary() {
  const appState = useContext(StateContext);

  return (
    <div className="summary-bg u-border-radius">
      <div className="summary-container">
        <h5 className="summary-heading">Order Summary</h5>
        <p className="heading-quaternary">
          "I drink my coffee {appState.sum[0] === 'Capsule' ? 'using ' : 'as '}
          <span>
            {appState.sum[0] === 'Capsule' ? 'Capsules' : appState.sum[0]}
          </span>
          , with a <span>{appState.sum[1]}</span> type of bean.{' '}
          <span>{appState.sum[2]}, </span>
          sent to me <span>{appState.sum[4]}</span>"
        </p>
      </div>
    </div>
  );
}

export default Summary;
