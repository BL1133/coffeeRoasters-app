import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';
import numeral from 'numeral';

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
      4: 'Every week',
    },
    shipmentCost: {
      '250g': { everyWeek: 7.2, every2Weeks: 9.6, everyMonth: 12.0 },
      '500g': { everyWeek: 13.0, every2Weeks: 17.5, everyMonth: 22.0 },
      '1000g': { everyWeek: 22.0, every2Weeks: 32.0, everyMonth: 42.0 },
    },
    toggleOptions: {
      question1: true,
      question2: true,
      question3: true,
      question4: true,
      question5: true,
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
        }
        if (draft.toggleOptions[question] === false) {
          draft.toggleOptions[question] = !draft.toggleOptions[question];
        }
        return;
      case 'capsuleUnselected':
        // If Capsule is unselected after being selected, q4 will toggle again (only if question 5 is open. logic in Form.js)
        draft.toggleOptions.question4 = true;
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
        }
        if (index >= draft.currentQuestion && nextQuestion < 5) {
          draft.currentQuestion = nextQuestion;
        }
        return;
      case 'accordionOpened':
        draft.currentQuestion = action.value;
        return;
      case 'submitted':
        draft.submitModal = true;
        return;
      case 'weightSelected':
        const weightSelected = draft.data[2].options[action.value].title;

        function shipmentCost(weight, frequency) {
          const { everyWeek, every2Weeks, everyMonth } = draft.shipmentCost[
            weight
          ];
          switch (frequency) {
            case 'everyWeek':
              return numeral(everyWeek).format('0.00');
            case 'every2Weeks':
              return numeral(every2Weeks).format('0.00');
            case 'everyMonth':
              return numeral(everyMonth).format('0.00');
            default:
              break;
          }
        }
        if (weightSelected === '250g') {
          draft.data[4].options[0].info =
            '$' +
            shipmentCost('250g', 'everyWeek') +
            ' per shipment. Includes free first-class shipping.';
          draft.data[4].options[1].info =
            '$' +
            shipmentCost('250g', 'every2Weeks') +
            ' per shipment. Includes free priority shipping.';
          draft.data[4].options[2].info =
            '$' +
            shipmentCost('250g', 'everyMonth') +
            ' per shipment. Includes free priority shipping.';
        } else if (weightSelected === '500g') {
          draft.data[4].options[0].info =
            '$' +
            shipmentCost('500g', 'everyWeek') +
            ' per shipment. Includes free first-class shipping.';
          draft.data[4].options[1].info =
            '$' +
            shipmentCost('500g', 'every2Weeks') +
            ' per shipment. Includes free priority shipping.';
          draft.data[4].options[2].info =
            '$' +
            shipmentCost('500g', 'everyMonth') +
            ' per shipment. Includes free priority shipping.';
        } else if (weightSelected === '1000g') {
          draft.data[4].options[0].info =
            '$' +
            shipmentCost('1000g', 'everyWeek') +
            ' per shipment. Includes free first-class shipping.';
          draft.data[4].options[1].info =
            '$' +
            shipmentCost('1000g', 'every2Weeks') +
            ' per shipment. Includes free priority shipping.';
          draft.data[4].options[2].info =
            '$' +
            shipmentCost('1000g', 'everyMonth') +
            ' per shipment. Includes free priority shipping.';
        }

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
