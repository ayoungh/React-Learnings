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
  }

  //rendering method
  render() {
    console.log('rendering!');
    return <button onClick={this.update}>{this.state.val}</button>
  }


  //build in method to show component has mounted
  componentDidMount(){
    console.log('did mount');
  }
  //build in method to show component is unmounted
  componentWillUnmount() {
    console.log('unmounted');
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
