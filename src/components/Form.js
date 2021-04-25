import Question from './Question';
import React from 'react';
import data from '../data';
import { useImmer } from 'use-immer';

function Form(props) {
  const [state, setState] = useImmer(data);

  function handleChange(e) {
    const questionName = e.target.name;
    const radioName = e.target.value;
    const questionIndex = state.findIndex(
      (question) => question.name === questionName
    );
    const optionIndex = state[questionIndex].options.findIndex(
      (option) => option.radioName === radioName
    );
    const selectedIndex = state[questionIndex].options.findIndex(
      (option) => option.selected === true
    );

    setState((draft) => {
      draft[questionIndex].options[selectedIndex].selected = false;
      draft[questionIndex].options[optionIndex].selected = true;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="plan-container u-margin-left-right-m">
      <form onSubmit={handleSubmit}>
        {state.map((question) => (
          <Question
            key={question.name}
            title={question.title}
            options={question.options}
            question={question.name}
            handleChange={handleChange}
          />
        ))}
        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
