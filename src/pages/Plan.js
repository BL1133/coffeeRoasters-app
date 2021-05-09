import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';

import questions from '../data';
import Form from '../components/Form';
import Process from '../components/Process';
import SubmitModal from '../components/SubmitModal';

export const StateContext = createContext();
export const DispatchContext = createContext();

function Plan() {
  const initialState = {
    data: questions,
    sum: {
      0: 'Filter',
      1: 'Single Origin',
      2: '500g',
      3: 'Filter',
      4: 'Every Week',
    },
    toggleOptions: {
      question1: true,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
    },
    currentQuestion: 0,
    submitModal: false,
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
        const capsuleSelected = draft.data[0].options[0].selected;

        if (action.value === 'capsuleSelected' && capsuleSelected) {
          // Remove question4 selected options
          // Remove chosen grounded option if Capsule is selected
          // Toggles question as long as it's not toggled already
          draft.data[3].options[0].selected = false;
          draft.data[3].options[1].selected = false;
          draft.data[3].options[2].selected = false;
          draft.toggleOptions.question4 = false;
          draft.sum[3] = '';
        } else if (draft.toggleOptions[question] === false) {
          draft.toggleOptions[question] = !draft.toggleOptions[question];
        }
        return;
      case 'nextQuestion':
        const index = action.value;
        const nextQuestion = index + 1;
        const questionNames = Object.keys(draft.toggleOptions);
        const isCapsuleSelected = draft.data[0].options[0].selected;

        // toggle next question options, unless capsule is selected:
        // When capsule is selected, question 4 is disabled, which prevents question 5 from being toggled
        if ((isCapsuleSelected && index === 2) || draft.currentQuestion === 4) {
          draft.toggleOptions.question5 = true;
        } else {
          draft.toggleOptions[questionNames[nextQuestion]] = true;
        }
        // ************
        // * This defines currentQuestion for FormNav.
        // currentQuestion gets stuck at 2 or 3, and can't highlight 4, because of 3 being disabled. Skips right to 4.
        if (
          (isCapsuleSelected && draft.currentQuestion === 2) ||
          (isCapsuleSelected && draft.currentQuestion === 3)
        ) {
          draft.currentQuestion = 4;
        } else if (index >= draft.currentQuestion && nextQuestion < 5) {
          draft.currentQuestion = nextQuestion;
        }
        return;
      case 'accordionOpened':
        draft.currentQuestion = action.value;
        return;
      case 'submitted':
        draft.submitModal = true;
        return;
      default:
        return draft;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  console.log(state.currentQuestion, state.data);

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
        <SubmitModal isOpen={state.submitModal} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Plan;
