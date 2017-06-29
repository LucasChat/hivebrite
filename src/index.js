import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(
  autoRehydrate(),
  applyMiddleware(thunk, promiseMiddleware())
));

const persistConf = {
  debounce: 2,
  keyPrefix: 'HIVEBRITE_TEST__',
};

// browserHistory.listen((location) => store.dispatch(changeLocation(location)));

persistStore(store, persistConf);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/homepage"/>
        <Route path="homepage" component={HomePage} />
        <Redirect path="*" from="*" to="/"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
