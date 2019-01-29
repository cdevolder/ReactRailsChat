// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {createHistory as history } from 'history';

// internal modules
import App from './components/app';

// State and reducers
import messagesReducer from './reducers/messages_reducer';

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ['Channel1', 'Channel2', 'Channel3', 'Channel4', 'Channel5']
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('chat_app')
);
