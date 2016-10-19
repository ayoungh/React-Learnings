import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super(); //to get our context

    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1});
  }

  //built in methods to show mounting
  componentWillMount() {
    console.log('Mounting');

    this.setState({m:2});
  }

  //rendering method
  render() {
    console.log('rendering!');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }


  //build in method to show component has mounted
  componentDidMount(){
    console.log('did mount', ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  //build in method to show component is unmounted
  componentWillUnmount() {
    console.log('unmounted');
    clearInterval(this.inc);
  }


}

class Wrapper extends React.Component {
  constructor() {
    super(); //to get our context
  }
  // mount the component on the page
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  // unmount the component from the page
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a">
        </div>
      </div>
    );
  }
}

export default Wrapper
