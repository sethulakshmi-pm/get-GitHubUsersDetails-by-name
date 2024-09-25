import './index.css';

import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import App from './components/App';
import Followers from './components/Followers';
import Following from './components/Following';
import React from 'react';
import ReactDOM from 'react-dom';
import Repo from './components/Repo';
import Search from './components/Search';
import User from './components/User';

const routes = (
  <Router
    history={browserHistory}
  >
    <Route path="/" component={App}>
      <IndexRoute
        component={Search}
      />

      <Route path="user/:username" component={User}>
        <Route
          path="followers"
          component={Followers}
        />
        <Route
          path="following"
          component={Following}
        />
        <Route
          path="repo"
          component={Repo}
        />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
