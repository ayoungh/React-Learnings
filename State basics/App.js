import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    //this will give us the context for this within our component
    super();

    this.state = {
      txt: "this is the state text"
    };
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
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>Hello World {txt}</h1>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
