import Question from './Question';
import React, { useContext } from 'react';
import { StateContext } from '../pages/Plan';
import { DispatchContext } from '../pages/Plan';
import Summary from '../components/Summary';
import FormNav from '../components/FormNav';

function Form(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

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
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(appState.data);
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
            <Summary />
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
