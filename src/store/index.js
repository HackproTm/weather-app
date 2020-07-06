import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { city } from '../reducers/city';

const initialState = {
  city: 'Buenos Aires,ar'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));
