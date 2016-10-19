import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super(); //to get our context
    this.state = {
      data: [
        {id:1, name: 'Tony'},
        {id:2, name:'Tom'},
        {id:3, name:'Lena'},
        {id:4, name:'Nancy'},
        {id:5, name: 'Neil'},
        {id:6, name: 'Dan'},
        {id:7, name: 'Van'}
      ]
    };
  }

  //rendering method
  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}


const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>


}


export default App
