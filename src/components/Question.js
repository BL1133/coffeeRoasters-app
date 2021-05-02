function Question(props) {
  return (
    <div className="form-question">
      <h1 className="heading-secondary">{props.title}</h1>
      <div className="input-container">
        {props.options.map((option) => (
          <div key={option.radioName} className="form-check">
            <label>
              <input
                type="radio"
                name={props.question}
                value={option.radioName}
                onChange={props.handleChange}
                checked={!!option.selected}
                className="base-input"
              />
              <span className="form-check-input"></span>
              <h3 className="heading-quaternary">{option.title}</h3>
              <p className="text-dark">{option.info}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
