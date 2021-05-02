import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';

import questions from '../data';
import Form from '../components/Form';
import Summary from '../components/Summary';
import Process from '../components/Process';

export const StateContext = createContext();
export const DispatchContext = createContext();

function Plan() {
  const initialState = {
    data: questions,
    sum: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
    },
  };
  function ourReducer(draft, action) {
    switch (action.type) {
      case 'selected':
        const { questionIndex, selectedIndex, optionIndex } = action.value;

        // update selected property to true
        if (selectedIndex !== -1) {
          draft.data[questionIndex].options[selectedIndex].selected = false;
        }
        draft.data[questionIndex].options[optionIndex].selected = true;
        // add selection to sum object
        draft.sum[questionIndex] =
          draft.data[questionIndex].options[optionIndex].title;
        return;
      default:
        return draft;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <main>
          <section className="hero-plan u-margin-bottom-m-2 u-margin-left-right-s">
            <div className="hero-plan__container u-margin-left-right-s">
              <h2 className="heading-secondary">Create plan</h2>
              <p className="text-light">
                Coffee the way you wanted it to be. For coffee delivered
                tomorrow, or next week. For whatever brew method you use. For
                choice, for convenience, for quality.
              </p>
            </div>
          </section>
        </main>
        <Process home={false} />
        <Form />
        <Summary />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Plan;
