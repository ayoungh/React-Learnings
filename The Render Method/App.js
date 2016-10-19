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
    return (
      <div>
        <h1>Hello World render methods</h1> <b>bold child </b>
      </div>
      );
  }
}


export default App;
