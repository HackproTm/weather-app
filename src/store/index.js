import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { city } from '../reducers/city';

const initialState = {
  city: 'Buenos Aires,ar'
};

export const store = createStore(city, initialState, composeWithDevTools(applyMiddleware(thunk)));
