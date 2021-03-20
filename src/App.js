import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import {home} from './home';
import {about} from './about';
import {menu} from './menu';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
      <Jumbotron />
      <Layout>
        <Switch>
          <Route exact path="/" component={home}/>
          <Route exact path="/about" component={about}/>
          <Route exact path="/menu" component={menu}/>
          <Route component={NoMatch} />
        </Switch>
        </Layout>
      </Router>
    </React.Fragment>
    
  );
  }
}

export default App;
