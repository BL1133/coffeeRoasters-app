import Question from './Question';
import React, { useContext, useEffect } from 'react';
import { StateContext } from '../pages/Plan';
import { DispatchContext } from '../pages/Plan';
import Summary from '../components/Summary';
import FormNav from '../components/FormNav';

function Form(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    if (appState.sum[0] === 'Capsule') {
      appDispatch({ type: 'toggleOptions', value: 'capsuleSelected' });
    }
    if (
      appState.toggleOptions.question5 === true &&
      appState.toggleOptions.question4 === false &&
      appState.sum[0] !== 'Capsule'
    ) {
      appDispatch({ type: 'capsuleUnselected' });
    }
  });
  function handleChange(e) {
    const questionName = e.target.name;
    const radioName = e.target.value;
    const questionIndex = appState.data.findIndex(
      (question) => question.name === questionName
    );
    const optionIndex = appState.data[questionIndex].options.findIndex(
      (option) => option.radioName === radioName
    );
    const selectedIndex = appState.data[questionIndex].options.findIndex(
      (option) => option.selected === true
    );

    appDispatch({
      type: 'selected',
      value: {
        selectedIndex: selectedIndex,
        questionIndex: questionIndex,
        optionIndex: optionIndex,
      },
    });
    appDispatch({
      type: 'nextQuestion',
      value: questionIndex,
    });
    if (questionIndex === 2) {
      appDispatch({ type: 'weightSelected', value: optionIndex });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    appDispatch({ type: 'submitted' });
  }

  return (
    <div className="form-container u-margin-left-right-m u-margin-bottom-m-2">
      <div className="form-columns">
        <FormNav />
        <form onSubmit={handleSubmit}>
          {appState.data.map((question) => (
            <Question
              key={question.name}
              title={question.title}
              options={question.options}
              question={question.name}
              handleChange={handleChange}
            />
          ))}
          <div className="form-group">
            <div className="summary-bg u-border-radius">
              <div className="summary-container">
                <h5 className="summary-heading">Order Summary</h5>
                <Summary isModal={false} />
              </div>
            </div>
            <button className="btn-form btn-plan" type="submit">
              Create my plan!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
