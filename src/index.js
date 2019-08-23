import React from 'react';
import routes from './routing/routes';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import history from './history';
import { configureStore } from './store';
import { loadState } from './helpers';
import rootSaga from './store/rootSaga';
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';

const target = document.querySelector('#root');
const store = configureStore(rootReducer, rootSaga, loadState());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route>{routes}</Route>
    </Router>
  </Provider>,
  target
);