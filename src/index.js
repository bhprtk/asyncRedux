import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Splash from './components/Splash';
import PokemonPage from './components/PokemonPage';
import store from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash} />
        <Route path='/pokemon' component={PokemonPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
