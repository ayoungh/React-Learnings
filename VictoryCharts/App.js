import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';


const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class App extends React.Component {
  constructor(){
    //this will give us the context for this within our component
    super();

    this.state = {
      txt: "VictoryCharts"
    };
  };



  render() {
    let txt = this.state.txt;
    return (
      <div>
        <h1>{txt}</h1>
          <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat allows d3 to determine the number of
          // ticks based on data, but formats them to look the way that you'd like
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
