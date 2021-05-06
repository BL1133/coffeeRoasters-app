import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';

import questions from '../data';
import Form from '../components/Form';
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
    toggleOptions: {
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
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
      case 'toggleOptions':
        const question = action.value;

        if (action.value === 'capsuleSelected') {
          draft.toggleOptions.question4 = false;
        } else {
          draft.toggleOptions[question] = !draft.toggleOptions[question];
        }
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
          <section className="hero-plan u-border-radius u-margin-bottom-m-2 u-margin-left-right-s">
            <div className="hero-plan__container u-margin-left-right-s">
              <h2 className="heading-primary">Create plan</h2>
              <p className="text-light">
                Build a subscription plan that best fits your needs. We offer an
                assortment of the best artisan coffees from around the globe
                delivered fresh to your door.
              </p>
            </div>
          </section>
        </main>
        <Process home={false} />
        <Form />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Plan;
