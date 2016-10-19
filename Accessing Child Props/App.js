import React from 'react';
import ReactDOM from 'react-dom';

//When one component renders another component in react this is called the Owner ownee relationship
//The parent component is referred to as a composit


class App extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>
  }
}


//Button Component
class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
};

//this gets delivered via the this.props.children so when we put child node inside the Button component it uses it
const Heart = () => <span className="glyhicon.glyhicon-heart">3</span>





ReactDOM.render(<App />, document.getElementById('app'));
