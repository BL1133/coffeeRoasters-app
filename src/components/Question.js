function Question(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.options.map((option) => (
          <div key={option.radioName} className="form-check">
            <label>
              <input
                type="radio"
                name={props.question}
                value={option.radioName}
                onChange={props.handleChange}
                checked={!!option.selected}
                className="form-check-input"
              />
              <h3>{option.title}</h3>
              <p>{option.info}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
