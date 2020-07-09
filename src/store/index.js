import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const initialState = {
  city: 'Buenos Aires,ar'
};

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
