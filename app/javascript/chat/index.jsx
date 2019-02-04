// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';

const identityReducer = (state = null) => state;
const chatApp = document.getElementById('chat_app')

const initialState = {
  messages: [],
  channels: []
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatApp
);
