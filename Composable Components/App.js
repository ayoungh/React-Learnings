import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super(); //to get our context
    this.update = this.update.bind(this);
    this.state = {red: 0};
  }

  update() {
    console.log('update state?', this.state.red)
    this.setState({red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value});
  }

  //rendering method
  render() {
    console.log('rendering!');
    return (
      <div>
        <NumInput
          ref="red"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="number"
          label="Red"
          update={this.update} />
      </div>
    );
  }


// this.state = { val: 0 };
}

class NumInput extends React.Component {

  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : ''

    return (
      <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}
          />
        {label}
      </div>
    );
  }


}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 0,
  val: 0,
  label: '',
  type: 'range'
}

App.defaultProps = {val:0};

export default App
