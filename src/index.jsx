import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Sent from './views/Sent';
import Received from './views/Received';
import './index.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sent" exact component={Sent} />
      <Route path="/received" exact component={Received} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
