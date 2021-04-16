const e = React.createElement;

class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q1: 'option1',
    };
  }

  handleChange(e) {
    this.setState({
      q1: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.q1 + ' was submitted.');
  }

  render() {
    return (
      <div className="plan-container u-margin-left-right-m">
        <form onSubmit={this.handleSubmit.bind(this)}>
          {/* Question 1 */}
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option1"
                onChange={this.handleChange.bind(this)}
                checked={this.state.q1 === 'option1'}
                className="form-check-input"
              />
              Capsule
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option2"
                onChange={this.handleChange.bind(this)}
                checked={this.state.q1 === 'option2'}
                className="form-check-input"
              />
              Filter
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option3"
                onChange={this.handleChange.bind(this)}
                checked={this.state.q1 === 'option3'}
                className="form-check-input"
              />
              Espresso
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Plan;
