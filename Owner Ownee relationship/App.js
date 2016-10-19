import React from 'react';
import ReactDOM from 'react-dom';

//When one component renders another component in react this is called the Owner ownee relationship
//The parent component is referred to as a composit


class App extends React.Component {
  constructor(){
    //this will give us the context for this within our component
    super();

    this.state = {
      txt: "this is the state text"
    };

    //make update shorthand
    this.update = this.update.bind(this);
  };

  // to manage the state we create a custom method to update the state:

  update(event) {
    this.setState({
      txt: event.target.value
    });
  };


  render() {
    let txt = this.state.txt;
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update}/>
        <Widget txt={this.state.txt} update={this.update}/>
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
