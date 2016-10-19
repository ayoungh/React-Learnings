import React from 'react';
import ReactDOM from 'react-dom';
// can have state
class App extends React.Component {
  /* The render method below is only allowed to return a single node.
    The following has 2 nodes and will throw an error: (This is like returning 2 React.createElement functions)
    return <h1>Hello World render methods</h1> <b>bold child </b>

    To fix this issue we can wrap them in a single node <div></div>

  */
  render() {
    // parenthesis is not required but makes it nice to put things on new lines:

    let txt = this.props.txt;
    return (
      <div>
        <h1>{txt}</h1>
      </div>
      );
  }
}

//this is to define the types to expect for props
App.propTypes = {
  txt: React.PropTypes.string,
  // cat: React.PropTypes.number
  //we can tak on if the item is required
  cat: React.PropTypes.number.isRequired
}

// this is how we can define default values for our props
App.defaultProps = {
  txt: 'This is the default prop text'
}



ReactDOM.render(<App txt="This is the props text" cat={5} />, document.getElementById('app'));
