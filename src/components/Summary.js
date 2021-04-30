import React, { useContext } from 'react';
import { StateContext } from './Plan';

function Summary() {
  const appState = useContext(StateContext);

  return (
    <div>
      <p>
        "I drink my coffee {appState.sum[0] === 'Capsule' ? 'using ' : 'as '}
        <span>
          {appState.sum[0] === 'Capsule' ? 'Capsules' : appState.sum[0]}
        </span>
        , with a <span>{appState.sum[1]}</span> type of bean.{' '}
        <span>{appState.sum[2]},</span>
        sent to me <span>{appState.sum[4]}</span>"
      </p>
    </div>
  );
}

export default Summary;
