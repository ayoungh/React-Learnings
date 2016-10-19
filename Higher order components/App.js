import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super(); //to get our context
    this.update = this.update.bind(this);
    this.state = {val: 0};
  }

  update() {
    console.log('update state?', this.state.val)
    this.setState({val: this.state.val + 1});
    // ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('app'));
  }

  componentWillMount() {
      console.log('will mount');
  }

  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }


  componentDidMount() {
    console.log('did mount');
  }

};


//stateless Component
const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>

const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>


let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);


class App extends React.Component {
  //rendering method
  render() {
    console.log('rendering!');
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    );
  }


// this.state = { val: 0 };
}

App.defaultProps = {val:0};

export default App
