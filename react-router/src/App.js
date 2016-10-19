import React from 'react';
import { Router, Route, Redirect, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


// const App = () => <h1>Hello world</h1>;

class Page extends React.Component {
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route, this.routerWillLeave
    )
  }

  routerWillLeave(  nextLocation  ) {
    console.log(`leaing home for the ${nextLocation.pathname}`);
  }

  render() {
    return (<div><h1>{this.props.location.query.message || ''}</h1><Links/></div>);
  }
}

Page.contextTypes = { router: React.PropTypes.object.isRequired };

const Home = (props) => <h1>Home</h1>;
const HomeBody = (props) => <div>this is the home body</div>;
const Other = (props) => <h1>Other</h1>;
const OtherBody = (props) => <div>this is the other body</div>;
const About = (props) => <h1>About us page</h1>;

const Container = (props) => <div>{props.header}{props.body}<Links /></div>;

//const Page = (props) => <div><h1>{props.location.query.message || ''}</h1><Links/></div>;


const Links = () => <nav>
                      <Link to={ {pathname: '/', query: {message:'yo'}} }>Yo</Link>
                      <Link to="/about">About</Link>
                      <Link to="/about-us">About US</Link>
                      <Link to="/a">Home</Link>
                      <Link to="/other">Other</Link>
                    </nav>;

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
      <Route path="/" component={Page}></Route>
      <Route path="/about-us" component={About}></Route>
        <Route path="/a" component={Container}>
          <IndexRoute components={ {header: Home, body: HomeBody} }></IndexRoute>
          <Route path="/other" components={ {header: Other, body: OtherBody} }></Route>

        </Route>
        <Redirect from="/about" to="/about-us"></Redirect>
      </Router>
    );
  }
};


export default App;
