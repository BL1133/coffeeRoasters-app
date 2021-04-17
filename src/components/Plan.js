import React, { useState } from 'react';
import PlanOption from './PlanOption';

function Plan(props) {
  const [option, setOption] = useState('option1');

  function handleChange(e) {
    setOption(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(option + ' was submitted.');
  }

  return (
    <div className="plan-container u-margin-left-right-m">
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <PlanOption
          value="option1"
          checked={option === 'option1'}
          onChange={handleChange}
        >
          Capsule
        </PlanOption>
        <PlanOption
          value="option2"
          checked={option === 'option2'}
          onChange={handleChange}
        >
          Filter
        </PlanOption>
        <PlanOption
          value="option3"
          checked={option === 'option3'}
          onChange={handleChange}
        >
          Espresso
        </PlanOption>

        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Plan;
