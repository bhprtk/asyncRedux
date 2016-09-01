import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Splash from './components/Splash';
// import store from './store';

render(
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash} />
      </Route>
    </Router>,
  document.getElementById('root')
);
