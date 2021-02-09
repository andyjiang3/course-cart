import React, { Component } from 'react';
import App from '../App';
import Receipt from './Receipt';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Routing for pages
class MainRouter extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/receipt" component={Receipt} />
          </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default MainRouter;