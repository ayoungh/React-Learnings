import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super(); //to get our context
    this.state = {
      input: '/* add your jsx here*/',
      output: '',
      err: ''
    };
    this.update = this.update.bind(this);
  }

  update(event) {
    let code = event.target.value
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      });
    } catch (e) {
      this.setState({
        err: e.message
      });
    }
  }

  //rendering method
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
            ></textarea>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App
