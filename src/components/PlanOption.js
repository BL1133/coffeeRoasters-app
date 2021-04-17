const PlanOption = (props) => (
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
        className="form-check-input"
      />
      {props.children}
    </label>
  </div>
);

export default PlanOption;
