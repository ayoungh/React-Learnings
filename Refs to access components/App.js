import React from 'react';
import ReactDOM from 'react-dom';

//When one component renders another component in react this is called the Owner ownee relationship
//The parent component is referred to as a composit


class App extends React.Component {
  constructor(){
    //this will give us the context for this within our component
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };

    //make update shorthand
    this.update = this.update.bind(this);
  };

  // to manage the state we create a custom method to update the state:

  update(event) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  };


  render() {
    let txt = this.state.txt;
    return (
      <div>
        {this.state.red}
        <Slider ref="red" update={this.update}/>
        {this.state.green}
        <Slider ref="green" update={this.update}/>
        {this.state.blue}
        <Slider ref="blue" update={this.update}/>
      </div>
      );
  }
}


//NEW Component WITH STATES
class Slider extends React.Component {

  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.update}/>
      </div>
    );
  }
}




//create new stateless component
const Widget = (props) => {
  let txt = props.txt;
  return (
    <div>
      <input type="text"
        onChange={props.update}/>
      <h1>Hello World {txt}</h1>
    </div>
    );
};


ReactDOM.render(<App />, document.getElementById('app'));
